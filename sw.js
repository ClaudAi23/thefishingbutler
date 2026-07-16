/* ButlerFish — service worker (offline app shell) */
/* v9: puffer resized 86% -> 70% of the tile (iOS motifs sit at 60-72%; ours was cramped against
   the squircle corners). The ?v= query alone can't evict an installed PWA's cached shell — only
   this bump does, which is why it moves with every icon change. */
const CACHE = 'fb-shell-v9';
const SHELL = [
  '/', '/index.html', '/site.webmanifest',
  '/icon-192.png', '/icon-512.png', '/icon-maskable-512.png', '/apple-touch-icon-180.png',
  '/favicon.ico', '/favicon.svg',
  '/logo.png', '/mascot.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(SHELL).catch(() => {})).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Never intercept Supabase (API/auth/storage/realtime) or the weather API — always go to network.
  const sameOrigin = url.origin === self.location.origin;
  const isCdn = /jsdelivr|cloudflare|fonts\.(googleapis|gstatic)/.test(url.host);
  if (!sameOrigin && !isCdn) return;

  // HTML/navigation: network-first, fall back to cached shell when offline.
  const accept = req.headers.get('accept') || '';
  if (req.mode === 'navigate' || accept.includes('text/html')) {
    e.respondWith(
      fetch(req)
        .then((r) => { const cp = r.clone(); caches.open(CACHE).then((c) => c.put('/index.html', cp)); return r; })
        .catch(() => caches.match('/index.html'))
    );
    return;
  }

  // Static assets + CDN libs/fonts: cache-first, fill cache on first network hit.
  e.respondWith(
    caches.match(req).then((cached) =>
      cached || fetch(req).then((r) => {
        if (r && r.ok) { const cp = r.clone(); caches.open(CACHE).then((c) => c.put(req, cp)); }
        return r;
      }).catch(() => cached)
    )
  );
});
