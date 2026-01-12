const cacheName = 'school-year-calculator-v1';
const filesToCache = [
  '/',
  'index.html',
  'icon.png', // Replace with the path to your app icon
  // Add other files to cache as needed
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
