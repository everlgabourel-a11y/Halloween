const BASE = new URL(".", self.registration.scope).pathname;
const CACHE = "elremote-pages-shell-v2";
const SHELL = [BASE, BASE + "manifest.webmanifest", BASE + "icon.svg"];
self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(SHELL)));
  self.skipWaiting();
});
self.addEventListener("activate", event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener("fetch", event => {
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin || url.pathname.includes("/api/")) return;
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request).then(r => r || caches.match(BASE))));
});
