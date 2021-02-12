'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "64095c5337211a2489ede2e17f9fce69",
"assets/assets/fonts/Roboto-Regular.ttf": "11eabca2251325cfc5589c9c6fb57b46",
"assets/assets/img/add.png": "6bb88ebfdec5ce6c8dba5508f05274ae",
"assets/assets/img/add_btn.png": "b02ee7511b94cef1e5e19dc253fedb0b",
"assets/assets/img/add_files_blue.png": "0bf1a1d3cfa6da1f59c71bca3c3df71a",
"assets/assets/img/add_member.png": "db2b75333edc8c7fa59a0417b7cf9882",
"assets/assets/img/add_user_blue.png": "5e5f32bcd418f605d4480dd6cefe6da5",
"assets/assets/img/attachment.png": "5e84d6406abd700de53ca221b0ca5168",
"assets/assets/img/attachment_grey.png": "a0feab4608ef9424850092dfb44f5145",
"assets/assets/img/brightness_blue.png": "7d7531d61b22e7b1e1f37c1c8f4ad574",
"assets/assets/img/call_blue.png": "2032eb18900bd8cd5803e36a1898729f",
"assets/assets/img/call_blue_2.png": "f5cc285db8a3919f47acde2115fd2991",
"assets/assets/img/camera_bck_ble.png": "694150ec482c9e657bdd457183f320b8",
"assets/assets/img/camera_grey.png": "84109d2fb6c89caed21901d8b87d4181",
"assets/assets/img/camera_grey_2.png": "8d9009368de7b35586b49100ef257020",
"assets/assets/img/camera_white.png": "d7f1d4e7e3f5bd1b83cd2e58c2b2cd29",
"assets/assets/img/chat_blue_n.png": "e3e38820f0079c9ca9f0ad9d36790a73",
"assets/assets/img/contacts_blue.png": "1379a3621fbb2e717e2c5e39b4006b4e",
"assets/assets/img/delete.png": "2358d9ec85a47818a676d4f36ecc1cca",
"assets/assets/img/delete_bck_blue.png": "8477684b2ecb19188edcc4a99230ed31",
"assets/assets/img/delete_circle.png": "d6ffc5974b1aedac42a41005f6312622",
"assets/assets/img/delete_user_blue.png": "6ea7af6403b6b467c35658fcf537f8f6",
"assets/assets/img/download_blue.png": "e7fe48e58136ef4976c67bb46b973cd1",
"assets/assets/img/drawer.png": "336fb09f05081bcf8c5be18d41ae5ad3",
"assets/assets/img/edit.png": "f791a3a0f4c0afe856296744d9d1bdec",
"assets/assets/img/forward_blue.png": "030e0261b1b63c85e6694b5a1b7f560b",
"assets/assets/img/gallery_bck_blue.png": "83958524f8e4e623f05d4986c0a5cd69",
"assets/assets/img/gallery_blue.png": "0ff9aa377a4393614e9c8985cf1b9df3",
"assets/assets/img/group_blue.png": "2433d8a71de36ce7f1a372d64a4246de",
"assets/assets/img/group_ed.png": "c536e2942a936a5504a24d031ff54ce4",
"assets/assets/img/group_grey.png": "5d9a13b79d3193fdddfd124d5dabc193",
"assets/assets/img/group_white.png": "0d5893559ed65bb7dc4df4b0a579562b",
"assets/assets/img/link_blue.png": "af013d731a2206ff6046653f454feea4",
"assets/assets/img/lock_blue.png": "acbee339f1f7d5d66d0491d49a697c6b",
"assets/assets/img/lock_blue_2.png": "463125076df553c7840c4466cabbabd2",
"assets/assets/img/memory_blue.png": "90188d4e70155124aed084ef9ceb3885",
"assets/assets/img/message_blue.png": "b2e6e3208175279644af08b67a8c7f01",
"assets/assets/img/mic.png": "ddb140ed483bd07fc47831f0f8e2e270",
"assets/assets/img/mic_grey_2.png": "fbfead7bab3f487721fe77b42d8bd4a1",
"assets/assets/img/more_menu_icon.png": "cfbb38efd8b4d5e30821e7ed8b10d3c5",
"assets/assets/img/msg_blue.png": "c5d3ec67841b43594ff08717a19ee6e3",
"assets/assets/img/next.png": "4f733a6c90e80d4c5723cf7498294171",
"assets/assets/img/notification_blue.png": "ef9f594555a0ada42ff83c3f2834fae3",
"assets/assets/img/picasa_bck_blue.png": "d94ef995331b3574c50940451c53d33c",
"assets/assets/img/private_msg.png": "52487dcad88affdcd30ed2eb0aa7431a",
"assets/assets/img/profile_blue.png": "efb24e14d9e0e0e19115c65e31d51cfb",
"assets/assets/img/profile_bue.png": "efb24e14d9e0e0e19115c65e31d51cfb",
"assets/assets/img/profile_grey_bck.png": "bfeac79e229029c622ca5934db10e7f0",
"assets/assets/img/profile_white.png": "f9c6a637cba665608aef58128bf30735",
"assets/assets/img/question_blue.png": "c8db61b5132f94d045ff52dd4a498cc2",
"assets/assets/img/question_blue_2.png": "75e0758aed1f728c815866521317b10f",
"assets/assets/img/restore_blue.png": "ce742102fa6149eb03a48dda24d18d8d",
"assets/assets/img/restore_blue2.png": "f087ffc498f5962d0841deb68a600b11",
"assets/assets/img/save.png": "cb5e2aee2f8c5c90d6f2913fe2a9f5dd",
"assets/assets/img/search.png": "ff768b26ebd71c3e50b04977afd4ed54",
"assets/assets/img/search_grey.png": "76c2a995e3f3dd6bd064457dfd02cca3",
"assets/assets/img/secured_blue.png": "dbeebb031a429c078cdd4bd142c3c1e4",
"assets/assets/img/selected_grey.png": "5224fa892d1e563cb7513aa4ee469484",
"assets/assets/img/settings_profile.png": "0fe3d3782bc9f7f57f94d657d93e650e",
"assets/assets/img/simle.png": "a40128d973d9fc2f537736759cad95cc",
"assets/assets/img/smiley_grey.png": "18430cb0e71b1d3c58a536a710619893",
"assets/assets/img/test_dp.jpg": "cd5bb108ec317c220f0df789b562922a",
"assets/assets/img/toggle_white.png": "3907556a1e327d6df37f8884837799aa",
"assets/assets/img/user_excclaim_blue.png": "d2fd55b0a1e9822e4017d34fbb27c47d",
"assets/assets/img/video_blue.png": "e59fa90db5143c9399cefc4d979b6956",
"assets/assets/img/yuva_logo.png": "1b0913fe1be119636278e1f2820449c5",
"assets/FontManifest.json": "7bd44e44a298713a0beff64551a60daf",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "d290e4d6420b31ea1f24e599e781e5fe",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "0433ed85f7363afbb439a5c233451b1e",
"/": "0433ed85f7363afbb439a5c233451b1e",
"main.dart.js": "d181772bf3fe70eb9d34b4027463eab4",
"manifest.json": "f24b71a1fc4e55b4cdec42037b22047f",
"version.json": "1d694c3464548afcc40e7d096626ba7a"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
  for (var resourceKey in Object.keys(RESOURCES)) {
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
