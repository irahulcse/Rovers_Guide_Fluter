'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"/manifest.json": "bb97c5c157cb4226231fd2bbe11435c8",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/assets/AssetManifest.json": "644c1d2cc72f201ae6006247f14b72e7",
"/assets/LICENSE": "8c1379a320a0aada4f951bf9048ca84f",
"/assets/assets/food10.jpeg": "a10f0eabd4bc5199e861ff80e9da0a50",
"/assets/assets/logo.png": "e45b8ae0d603e47a4f52ab2699a333cb",
"/assets/assets/food6.jpeg": "4b2b09b3ba8bd59e396c5df21bdaacbe",
"/assets/assets/food3.jpeg": "17bddc4e929f84741bb4697c395f4630",
"/assets/assets/cc.png": "452a25466e5aa85987d005d17a9117c7",
"/assets/assets/food8.jpeg": "65221fbb33600b0c293d8109e5bd7146",
"/assets/assets/cm1.jpeg": "a928962696760e23579bdc358453301f",
"/assets/assets/cm4.jpeg": "5787ab2f6f13d3eac7493e4b7bd94389",
"/assets/assets/food5.jpeg": "a9fac937c06ea8979573dda27825d17d",
"/assets/assets/food2.jpeg": "957bd60e51795c367ff6d603ff83eb76",
"/assets/assets/cm2.jpeg": "93426d743309e7f732a51484b914f3e5",
"/assets/assets/hotel3.jpg": "9de67e204c1a8d82ff32b784e19156a1",
"/assets/assets/on2.png": "03529ee5ad35000ff24b2dc5e8ec8c53",
"/assets/assets/hotel11.jpg": "93fcb53cad2becd91fc2afcdec5d5300",
"/assets/assets/food7.jpeg": "343b604159f65c2ebdfc222dde0a56c7",
"/assets/assets/hotel6.jpg": "81632aa83e05b0581cd8295b2b11c7ae",
"/assets/assets/food4.jpeg": "395dd3a2b2481c408794cc120760be16",
"/assets/assets/food9.jpeg": "4bda91d110e4861e03ccd6856864a73a",
"/assets/assets/food1.jpeg": "9247524e449e53f1cadce95a521456fc",
"/assets/assets/hotel4.jpg": "1408f3e9406956eeca0d2cd0035027f8",
"/assets/assets/on3.png": "5114ae0194f381c1a0dcd6a7baf6bfca",
"/assets/assets/on1.png": "c7586deb30549975df91f54998e099a7",
"/assets/assets/cm3.jpeg": "8502ba3da54db5754d421e6a1acdb580",
"/assets/assets/hotel7.jpg": "862ce0fc592de13483f81f83f6315a4f",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2aa350bd2aeab88b601a593f793734c0",
"/assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2bca5ec802e40d3f4b60343e346cedde",
"/assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5a37ae808cf9f652198acde612b5328d",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/FontManifest.json": "18eda8e36dfa64f14878d07846d6e17f",
"/main.dart.js": "5c3f833b8960274b76932afded39d456",
"/index.html": "895b79313f2c0cd5e8cfed1371060120"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
