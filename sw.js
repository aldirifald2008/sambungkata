const CACHE_NAME = 'wordfinder-v1';
const ASSETS = [
  './',
  './index.html',
  './kamus.txt' // Masukkan semua nama file kamus Anda di sini
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});
