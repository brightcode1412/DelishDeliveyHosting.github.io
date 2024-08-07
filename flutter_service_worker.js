'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "8439beb8b1732c0a2985d22d90c57484",
".git/config": "3d67fb3a65a038757b86b4e02e06fd54",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "1ddb3f84bce6b343fe9bcaeb7f3882b7",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ff226472e9c823269ef42f42f580fab2",
".git/logs/refs/heads/master": "ff226472e9c823269ef42f42f580fab2",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/17/339e4f6b8ab482c1a025f69cb8981e35c42d84": "0c2ae209abfd9d45e40150c85e5c4e1d",
".git/objects/17/b9430a1568572bce9f0ada94c2aa3e9ea0b872": "bc37f6bb5ca2fa7e5830b2ac84e7d5fc",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1d/71b5a9c665eea594decf3b1c9aa0698b22e108": "7c7d93b1c4bc8c167c85e989ac6d8ab0",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/29/30b0e1753416e12f4268a98f9a5e8be35778a3": "1e787c669c61d9a7173bd1d627323108",
".git/objects/2b/fcea19a2a358a2be3e404e7f5b7085003dceb9": "a15cb967c3c25dc5c8f4fc99ec895308",
".git/objects/2e/2d823e8f0496a0b46dd6c0520ea5a160113f13": "79fb6220e6391bb05201fd5e12a3152c",
".git/objects/37/3b477b05e05d842b3898b8eeda14d7bcbdef4a": "1ecc37031ac35cf808b156e863220921",
".git/objects/38/ae26bf6b0a9b03dd8346e6d155106c70f0274c": "661cdfeb9f263eeafff62ac49cb9ac4c",
".git/objects/47/efa4720e0b7845055db264cdd46febe28a301c": "09537eed0093c06ae257c375fc8d92d6",
".git/objects/48/b7ef617271ba5102d741d864b50cd424925d1d": "1acfbb35aae597afdc65a27fa5c9d74c",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4e/a6446e45262d9f94b0e33a6f1f456d9e0e4998": "be3bcb519e2a5539536702fe1bc2a11e",
".git/objects/51/8be50d1e654f4e403e33575a533335dff64d4c": "918e72bdace3114234308fe2f40df1d9",
".git/objects/52/24ed302c9df2466fe36b5529941d34b4cf715a": "098fedf2eeec7eaae9c6d84769d2e360",
".git/objects/53/c05c6c0456497ad50f396f92a3246a85906394": "b5ddd2905f545d111c56c681dae2634b",
".git/objects/54/be30313bdb9937670ca3c62613dddbe8acbadf": "474ff27644d8a7eb987f61d9f79634a7",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/6e6fa4074bf699a51ef199087207a49867b89e": "18bba158745808828462f490402714c4",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/59/5e6846d15f71e29a23d1fd462a6d322a8de740": "4db9a0e2e1686f34a2ba5126251e32ee",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/65/c905d3b999f0eee30361fc3452a2760c133e8f": "c8f31d0aa7728914edeefa3f8af21612",
".git/objects/71/213a28eece5b3929b2f34f7c9e48fc45b85135": "4efd18e31389f7fcfc7f2bb8b9b184ec",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/76/5ded732f4383154e156001838d6b0eef1ed75f": "6054f807e3212ef70ee88e0fd4684834",
".git/objects/79/7c4a570ab4ec5b077a670bdcd53cfd5d680da6": "4aabf5af34d66e463f7a962f2d293037",
".git/objects/7d/a44d50d4a20b23707b7d89ef3b5cc385d0f4ac": "9948edf92688c732efdaae2e22e6a71c",
".git/objects/7e/1977b9f5c2ec56cf6a5bd95851a3912f5d33f8": "e70daf63d77ffc8a9cf2344295ba8d09",
".git/objects/80/fc981860a9dd7f6de3e66e8f77a58ec9345366": "2986d40fff3fdfd1cb3eb8efed7db206",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/93/d6eaaff43211eacb03d62985a6df2e0bc3f2c9": "3211edb4b25b395769e0e146f9751a04",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/9d/65a22627170706dd554f342794f4addd462dba": "a5508c652bb2a4bd289dcc2b491b3f74",
".git/objects/b3/552d9855e88366446c9be78355fb3d46eff347": "d756ca7fa18e89ea511929634042d72c",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b6/a41a5113c371d99961c3e20a55268f15f13daf": "7805cebea74ae8b072a0b80e6b2c496b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bc/82105a5edc225ef3a45354441586cd960ee14b": "791d3893c8a9eb41d30b94137e5d4bac",
".git/objects/c6/c73e18de5e675a5bd12c509ec03c7d9adab285": "75c8d9260b91d465a54df9f100c9d1fb",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/ce/2bea25113455e249ff5ec54c379d3c4639c3c2": "a23a845a9ca74378b734ed631ca8b841",
".git/objects/ce/390debe2318400dfa5c553ab70d8955f52cb19": "57e8c6cf5501ce7bcec6b252df3cfc2e",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/de2498ffe6168c872ce24af97082081b2f35be": "0365b2a1f2d7917929d0537395851ade",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/60e0fa176831cf8800b0a704e19fb4e3b4a85a": "9d612078622b7a72e2f1565eb640c905",
".git/objects/da/971661242e6cfdc392d0b4e2d04f298d35364d": "dba03f6d6363ac34a368499f783fadf9",
".git/objects/de/8bd2874322660a7890afa7e881b23c529c354d": "daafbb9d9d3c33aebd01b084321f3c8c",
".git/objects/e6/0e9938290128644027bdf0baef37c362d3d401": "23d86a878444861719b5850230e10507",
".git/objects/e6/4be3a4c4668052c4f5877d3409d6381f7bea2f": "b9da6f48a862763ab362621ec7d9cf42",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fa/87e009f9f0ff304c5c22b2471c65d48f11d25d": "1e52730cd88d7e510aa074c338114f77",
".git/objects/fb/2b930c36ed03e6e8898ef8224440e02c7a348a": "0b6751cde8209de9d4f5478b73e2b325",
".git/refs/heads/master": "e603630febc5c8e651907dea2411d672",
"assets/AssetManifest.bin": "d1178d20a0a6b8208589b6529f79076a",
"assets/AssetManifest.bin.json": "7014e1314f6db87c7cddde6976173df3",
"assets/AssetManifest.json": "5b03250eed5470c8edc3ab0d837a7e1b",
"assets/assets/fonts/AbhayaLibre-Regular.ttf": "a0a7b073c52e4a89a9afe42c78772ce9",
"assets/assets/fonts/EduAUVICWANTHand-VariableFont_wght.ttf": "d50e35cd14a96b4fa2c1583823b39ab8",
"assets/assets/fonts/GildaDisplay-Regular.ttf": "7b63a4bb0bdb27b83b10dd3e218654cd",
"assets/assets/fonts/Montserrat-VariableFont_wght.ttf": "e6cb49ef6502d09136c7302d56f4197b",
"assets/assets/images/carrot.svg": "5f8b336d9ea765490a58ba254066cb6d",
"assets/assets/images/imagepick.png": "a3b045122d7139ecd36ce86964130403",
"assets/FontManifest.json": "86d5e6225e2a006d7a1e9bb9e2054c0a",
"assets/fonts/MaterialIcons-Regular.otf": "c9457a5a1f0db30025de5834598b0845",
"assets/NOTICES": "18e1ead81ad967adfa4b7cc5b0319250",
"assets/packages/animated_snack_bar/assets/monochrome/check-circle.svg": "f6d9dd67711da5b6d4d965f66c10cd07",
"assets/packages/animated_snack_bar/assets/monochrome/comment-dots.svg": "44311bf381ea1155bfe38c40d44c577a",
"assets/packages/animated_snack_bar/assets/monochrome/exclamation-circle.svg": "63ffc503c8e024f9752866e021afb744",
"assets/packages/animated_snack_bar/assets/monochrome/exclamation-octagon.svg": "ab5fb6de2478b95f911cebb5cf6af9c3",
"assets/packages/animated_snack_bar/assets/monochrome/exclamation-triangle.svg": "10427de487dc532646c4a11f6be3fe84",
"assets/packages/animated_snack_bar/assets/regular/check-circle.svg": "0936541fbbf9ebf325169373c2d2439a",
"assets/packages/animated_snack_bar/assets/regular/exclamation-circle.svg": "69c777fe5b9ffd2f8286ca47f98d1a31",
"assets/packages/animated_snack_bar/assets/regular/exclamation-triangle.svg": "57a895d149648e4b69c7681d4efb2052",
"assets/packages/animated_snack_bar/assets/regular/info-circle.svg": "e733e8ecda8758e6b69d20cc1ca1c6c4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "94e31fd366fb7383a318361e57111edd",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6c6a80d05c12338a4b35988daaffc102",
"/": "6c6a80d05c12338a4b35988daaffc102",
"main.dart.js": "1c713ce0d0dc449fecb316834f14a3ec",
"manifest.json": "de32c2e14f54c0ebdcad9601304d83b9",
"version.json": "fbd73e97caad09146bb3f82590e63c82"};
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
