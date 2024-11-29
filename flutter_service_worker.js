'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "6b5e875f4f7a2ff8b8d981bff91e1955",
"version.json": "f54ec6a7b6908a001839edd70fce7143",
"index.html": "974d0275a89bb6d933a2a3ee414ad952",
"/": "974d0275a89bb6d933a2a3ee414ad952",
"main.dart.js": "2e3975dbbd16d55531ad58daa5d7a5fb",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "ad85fe6c38bbc50e699a056f868a484d",
"callback.html": "e6cb37a5124f348f64778b81b823fd85",
"icons/Icon-192.png": "2fbaf154d779ccba361ac248eb90f2e3",
"icons/Icon-maskable-192.png": "2fbaf154d779ccba361ac248eb90f2e3",
"icons/Icon-maskable-512.png": "16ac3fd409f0974d7bd18cbf3cf3336e",
"icons/Icon-512.png": "16ac3fd409f0974d7bd18cbf3cf3336e",
"manifest.json": "f7c34dff39d0696d8346483db0e00d20",
"assets/AssetManifest.json": "be4f855ec48af0035f066928390e708e",
"assets/NOTICES": "76236ec5583441360c480149586f0d00",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "0eda5a0b6b1254f29148bcd8a2e9a4ff",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fast_rsa/web/assets/worker.js": "cb436a66695a131c0f470e15a55b86a9",
"assets/packages/fast_rsa/web/assets/wasm_exec.js": "8bccb701dbf4a238e687fa92cda9c4bb",
"assets/packages/fast_rsa/web/assets/rsa.wasm": "316c2af4f44865c7a0e6cbaddef82c7e",
"assets/packages/solidpod/assets/images/default_logo.png": "dbb5e6248c2a461b60cd56916ba767ad",
"assets/packages/solidpod/assets/images/default_image.jpg": "632a914ee512ab401f1fd665235b31e5",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "47ddfe2ca4075ef6b48e5da1d5b74b13",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/assets/images/bottom_dot_five.png": "0800cdf177e8c4c64f45a8aa9a0fc19b",
"assets/assets/images/icon.png": "d4d59a5e7e97d9fcb93515e42b4735b5",
"assets/assets/images/msFatigue_icon.png": "2fadcc52fba1cc184c3dd2e1f1c75b30",
"assets/assets/images/bottom_dot_seven.png": "d71cf004cd296f48ccf56a1a146a3df5",
"assets/assets/images/bottom_dot_one.png": "613ad212d1c14dee064c9220cbddc5ee",
"assets/assets/images/title_dot_one.png": "92d374650649027e22b52f3530403790",
"assets/assets/images/logo.png": "267d7c34da67fbb481674a1306133f44",
"assets/assets/images/profile.png": "b8fd7f739d34a9177646c5e6dc817960",
"assets/assets/images/bottom_dot_four.png": "bb7e5cc0d45833f5f1816831f9c8bc7c",
"assets/assets/images/bottom_dot_three.png": "a7004e2dc917eda042764b9e24ccd004",
"assets/assets/images/image.png": "cfb64814a6752266c3f49d8651732484",
"assets/assets/images/bottom_dot_two.png": "e11c67a0979ab6a63a6b4c0ca0687cb5",
"assets/assets/images/bottom_dot_six.png": "bcc7cbc9c34dc0be43056e05f56403ff",
"assets/assets/markdown/fatigue_questionnaire.md": "4d884192f63c4feef0c4ae342962b23e",
"assets/assets/markdown/fatigue_small_questionnaire.md": "3c41a0e0bd4b237e916f6b26a1d21fbf",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
