// Service Worker for K-Talk Coach PWA
const CACHE_NAME = 'k-talk-v24';
const ASSETS = [
  './',
  './index.html',
  './real-korean-data.js',
  './coach.js',
  './localization.js',
  './real-korean-locales.js',
  './feedback-config.js',
  './feedback.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      );
    })
  );
  self.clients.claim();
});

// Network-First with Cache Fallback for instant updates
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  // Feedback and admin API responses must never enter offline caches.
  const staticCDNs = ['cdn.tailwindcss.com', 'cdnjs.cloudflare.com', 'cdn.jsdelivr.net'];
  if (url.origin !== self.location.origin && !staticCDNs.includes(url.hostname)) return;
  e.respondWith(
    fetch(e.request)
      .then((networkRes) => {
        if (networkRes && networkRes.status === 200 && !/no-store|private/i.test(networkRes.headers.get('Cache-Control') || '')) {
          const resClone = networkRes.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(e.request, resClone));
        }
        return networkRes;
      })
      .catch(() => caches.match(e.request))
  );
});
