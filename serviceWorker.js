// cache name 
// cache files
var cacheName='pwa-practice-v1';
var filesToCaches=[
    '/',
    '/index.html',
]
self.addEventListener("install", function(e){
    console.log("[service worker install]");
    e.waitUntil(
        caches.open(cacheName).then(function(cache){
            console.log("Service Worker caching app shell");
            return cache.addAll(filesToCaches);
        }
        )
    );
}



)
