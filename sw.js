const CACHE_NAME = 'raazim-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/favicon.png.png',
  '/logo1.png',
  '/icons/icon-192.png',
  '/icons/icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request).then((res) => {
        // Optionally cache new requests
        try {
          const resClone = res.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, resClone));
        } catch (e) {}
        return res;
      }).catch(() => caches.match('/'));
    })
  );
});
