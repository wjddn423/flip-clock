/* v6.1: offline cache + online-first HTML updates */
var CACHE='flip-clock-v6.1.0';
var ASSETS=['./','./index.html','./manifest.json','./icon-192.png','./icon-512.png'];
self.addEventListener('install',function(e){e.waitUntil(caches.open(CACHE).then(function(c){return c.addAll(ASSETS)}).then(function(){return self.skipWaiting()}))});
self.addEventListener('activate',function(e){e.waitUntil(caches.keys().then(function(keys){return Promise.all(keys.filter(function(k){return k.indexOf('flip-clock-')===0&&k!==CACHE}).map(function(k){return caches.delete(k)}))}).then(function(){return self.clients.claim()}))});
self.addEventListener('fetch',function(e){if(e.request.method!=='GET')return;var url=new URL(e.request.url);if(url.origin!==self.location.origin)return;
 if(url.pathname.slice(-12)==='version.json'){e.respondWith(fetch(e.request,{cache:'no-store'}));return}
 e.respondWith(fetch(e.request).then(function(res){if(res&&res.ok){var copy=res.clone();caches.open(CACHE).then(function(c){c.put(e.request,copy)})}return res}).catch(function(){return caches.match(e.request).then(function(cached){return cached||caches.match('./index.html')})}));
});
