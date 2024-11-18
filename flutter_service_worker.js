'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "2043ec0a64ad6847b53d610c2a53b92a",
"assets/AssetManifest.bin.json": "3695c082a00f5069b5b88ea1bdbaa08e",
"assets/AssetManifest.json": "ff4160aec648c8dc3ca34fd41d164fc1",
"assets/assets/fonts/PlusJakartaSans-Bold.ttf": "7dae244963714ee2b16fcbab46661792",
"assets/assets/fonts/PlusJakartaSans-BoldItalic.ttf": "fdbe93c588403b5c67963757775c98cb",
"assets/assets/fonts/PlusJakartaSans-ExtraBold.ttf": "9bfdb6bb1fda2806463b64e44c5eaed9",
"assets/assets/fonts/PlusJakartaSans-ExtraBoldItalic.ttf": "ba442a7aab453d20c5709ae7ca0837ac",
"assets/assets/fonts/PlusJakartaSans-ExtraLight.ttf": "bd1c3b0ba032000f9e62c171bd0558eb",
"assets/assets/fonts/PlusJakartaSans-ExtraLightItalic.ttf": "4a090ca0e9382ed4996f23042b335391",
"assets/assets/fonts/PlusJakartaSans-Italic.ttf": "5d157c8d8e47cc6e2da60b8158e78ca8",
"assets/assets/fonts/PlusJakartaSans-Light.ttf": "d6fb190614a9297c6263f85094463592",
"assets/assets/fonts/PlusJakartaSans-LightItalic.ttf": "0bf00206fd7547022cfa3e0ec073e427",
"assets/assets/fonts/PlusJakartaSans-Medium.ttf": "9fb6d71fc9edf9db455adeb04da9795c",
"assets/assets/fonts/PlusJakartaSans-MediumItalic.ttf": "6efa621b283ff999f05bc4d672de8c95",
"assets/assets/fonts/PlusJakartaSans-Regular.ttf": "f539ae4a8884822210a4553cc88ca3dc",
"assets/assets/fonts/PlusJakartaSans-SemiBold.ttf": "08d59825aa09f741c9272b85e6a1adbf",
"assets/assets/fonts/PlusJakartaSans-SemiBoldItalic.ttf": "9f3904d1769f5e804c644e59c203f447",
"assets/assets/imgs/appNameImg.png": "5858004d377f84202018290a37de1e25",
"assets/assets/imgs/appNameTransparentImg.png": "29b43d1a9e2f80d1d7ac3003e0aaeef9",
"assets/assets/imgs/englishLangImg.png": "d024d7cf16e7c48130f0e799a279560f",
"assets/assets/imgs/landingHeaderLeftDecImg.png": "24ee18e6726aaeff0c8e754d23dd3ed3",
"assets/assets/imgs/landingHeaderRightDecImg.png": "74084687197ea4b753601deeb76ed624",
"assets/assets/imgs/landingLeftImg.png": "0d47b3aaee30f748970aadc263db6077",
"assets/assets/imgs/landingRightImg.png": "250754d6f024cc49e77e0e796a855399",
"assets/assets/imgs/loadingImg.png": "96b7a6a030e9e575c700ef9695aa32c2",
"assets/assets/imgs/loginImg.png": "1b3fff4f7026f0d9cc9337e24b9a4704",
"assets/assets/imgs/onboarding1Img.png": "b493df44e145f91e9d1b29b4b4132613",
"assets/assets/imgs/onboarding2Img.png": "dcad9f3e04e20dbc2b69ccbac1c1e03a",
"assets/assets/imgs/onboarding3Img.png": "69d6f1428ed8f3487fdf667821fcbf59",
"assets/assets/imgs/satifyLeftDecImg.png": "02cab036e000b4f6d5afee52c2ef61f0",
"assets/assets/imgs/satifyRightDecImg.png": "98015aa0e039cd99f8c7e1d11f81f4da",
"assets/assets/imgs/signupImg.png": "58697e0cb93169ad0579700e02d977ab",
"assets/assets/imgs/splashImg.png": "9ace1ddb95b6e0e4a7121624ad54f740",
"assets/assets/imgs/startedBgImg.png": "ef7136e3b2a3c77b1eefdb50b0bd30c4",
"assets/assets/imgs/startedImg.png": "4f25ac6924a7fd8de659a09fef29a379",
"assets/assets/imgs/trustpilotImg.png": "80034128ca930f1cf324613716b68603",
"assets/assets/imgs/usertypeImg.png": "8e90e145f5a88da8d424c0946e6d17d8",
"assets/assets/imgs/welpcoWorkAvatarImg.png": "8a03c8898b40e2b348c9bb0fe4e0aaa8",
"assets/assets/imgs/welpcoWorkBadgeImg.png": "5b37be4c6e8d4c2b9a2459bed4e053f0",
"assets/assets/imgs/welpcoWorkBgImg.png": "e8de46347f32e02619f010c28fd8ff3a",
"assets/assets/svgs/24HourSvg.svg": "c5c529b375d4c6039733aae8f3356c8d",
"assets/assets/svgs/appoitmentCalendarSvg.svg": "b86fa68d5537cd3a862479fea42437a9",
"assets/assets/svgs/attachmentSvg.svg": "18d27b89881c6fbc5c532609186d4dfd",
"assets/assets/svgs/bgChecksSvg.svg": "da7a553589dec8f113a1fc47f1d592fd",
"assets/assets/svgs/bigCalenderSvg.svg": "74d5a6b6ed3347ae291a3f3567c05182",
"assets/assets/svgs/bigChattingSvg.svg": "e3a11a654e09747c90944f9483e7e1bb",
"assets/assets/svgs/bigLocationSvg.svg": "bdefab141186f53e24de7e68bb188be5",
"assets/assets/svgs/bigNotesSvg.svg": "00b88607721e4a5c266cdae90201bddb",
"assets/assets/svgs/bigSatifySvg.svg": "7875c91b55372dd125a908153a94e1d5",
"assets/assets/svgs/bookingsSvg.svg": "76ea4176fab3075d6a8f86b1be626183",
"assets/assets/svgs/calenderSvg.svg": "fbbfc5c2af48fc518f0cf6de78e70b43",
"assets/assets/svgs/careSvg.svg": "2e1b73ef526fbd3991b905a4758ceaa5",
"assets/assets/svgs/categoriesSvg.svg": "3d642a947421239202cd3ac504dc3bda",
"assets/assets/svgs/chatDeleteSvg.svg": "78896d5d85ff8ccac2f831fd99af9340",
"assets/assets/svgs/chatPrintSvg.svg": "30fcd9fb03718ad648d4f452d8d6991c",
"assets/assets/svgs/chatStarSvg.svg": "a0db8f0ca514d7fb47a1c47c660d2ded",
"assets/assets/svgs/chatSvg.svg": "d575987454911a6e4b2d615501c8e07b",
"assets/assets/svgs/childSvg.svg": "236a1c54259763fb380e267ad4466dec",
"assets/assets/svgs/clipboardSvg.svg": "41922fa995af2742718777adb7350190",
"assets/assets/svgs/clockSvg.svg": "f36f685cb9180ceb2ce85ef8ab00da7b",
"assets/assets/svgs/closeSvg.svg": "1df6c02a51ed9be122d728b1401c7adf",
"assets/assets/svgs/copySvg.svg": "681d3d67704a4aafb27014a1c8943cb7",
"assets/assets/svgs/dashboardSvg.svg": "0df8b25f7663845d6c8e0888b575af6e",
"assets/assets/svgs/educationSvg.svg": "707523d5423f1ca1863c2ed4dbf328fc",
"assets/assets/svgs/entertainmentSvg.svg": "b0819dd15d25c43d32f701da5ae6d397",
"assets/assets/svgs/exteriorMSvg.svg": "99efc1278aefab4b87f01f636442af8e",
"assets/assets/svgs/facebookSvg.svg": "8dd7998b7be7f4a5ea9122740ecd28e7",
"assets/assets/svgs/facebookWhiteSvg.svg": "0b3e33bc3e376fba92e64659f831582b",
"assets/assets/svgs/filterSvg.svg": "941c5f838e73aa6d57fd35afd71bebfd",
"assets/assets/svgs/gallerySvg.svg": "71843b50dc98926e45437e545ae14c5c",
"assets/assets/svgs/googleSvg.svg": "1f1d16b5f732fb3bcdef9c6286662fe7",
"assets/assets/svgs/groupUserSvg.svg": "dcc83ebfa28e870f2bf4b1ec9e192d1f",
"assets/assets/svgs/healthSvg.svg": "0641a15612a02beaa1ca8343616735af",
"assets/assets/svgs/heartSvg.svg": "755afa62a60ae8677cdeb4c509525f96",
"assets/assets/svgs/homeSvg.svg": "2b1589943f42252da4015de22acb9074",
"assets/assets/svgs/inHomeMSvg.svg": "49306899df32d4a3b80b150450a6df05",
"assets/assets/svgs/instagramWhiteSvg.svg": "6f56b5d0ebc5391def3f70e5da3678b1",
"assets/assets/svgs/locationSvg.svg": "b9064ca6f2e49dff8b3b4db59da3fa0e",
"assets/assets/svgs/logoutSvg.svg": "6b3c5d8c453cb4294d246f4d3ed4141b",
"assets/assets/svgs/mailWhiteSvg.svg": "5dec3e2cc740c200ece7fcf98f26aaf0",
"assets/assets/svgs/marketDownSvg.svg": "3eb9792470fd2299feea69cd5715ec40",
"assets/assets/svgs/marketUpSvg.svg": "f65af86f7cb81fb935283df4be551e0f",
"assets/assets/svgs/messageSvg.svg": "aeaf0a054fef609ed74c0511eeec57af",
"assets/assets/svgs/micSvg.svg": "0e0037ae58b2f85505facf0100398cfb",
"assets/assets/svgs/msgInSvg.svg": "bd7d73e96ea9831fe295c7c6bf61cbb3",
"assets/assets/svgs/msgOutSvg.svg": "4db145299580ab89ef9f5a9703851039",
"assets/assets/svgs/notiBell2Svg.svg": "e632b96998f90ea8024860a3d0d3579a",
"assets/assets/svgs/notiBellSvg.svg": "c2f9970adb2f34d6f48488de2631326b",
"assets/assets/svgs/petSvg.svg": "71335d491090d83724f300d2ca4f83c6",
"assets/assets/svgs/profileSvg.svg": "6ab9bf48c8b79742f61b228766e05dd0",
"assets/assets/svgs/redditSvg.svg": "0727811c2e76ecfd2ce114b389698b68",
"assets/assets/svgs/requestSvg.svg": "ea6f2e5790d785ed46811aede7dfc713",
"assets/assets/svgs/satisfySvg.svg": "8e15c05356bf5825e3ccdf19e0feb0d2",
"assets/assets/svgs/searchSvg.svg": "cf39a4eafa0c49f07cfb147d23f3b6bc",
"assets/assets/svgs/sendMsgSvg.svg": "4b3c58adbb3da422f6fd8f706b3a4a2f",
"assets/assets/svgs/settingSvg.svg": "815eca2d829e813efd33059048481961",
"assets/assets/svgs/shareSvg.svg": "e19cda62cffa23b6dabf638a963f92e0",
"assets/assets/svgs/shieldCheckSvg.svg": "f3b55dd92e1ae998f660a7271d86f559",
"assets/assets/svgs/subscriptionSvg.svg": "c38d68889b6965870948421de4de7406",
"assets/assets/svgs/supportSvg.svg": "5ffd58a683f9ba4fcdaf502ad3d1cd17",
"assets/assets/svgs/totalPendingSvg.svg": "c3d2f7a271458638a3708deb4ae94c9a",
"assets/assets/svgs/totalSaleSvg.svg": "f1383f4e0ea66ec84b58f609284a9ac0",
"assets/assets/svgs/totalServicesSvg.svg": "e922144ded85a0d8f3427ccb12b861c9",
"assets/assets/svgs/totalUserSvg.svg": "3114ddd90e0cea66a7bf42620016b664",
"assets/assets/svgs/twitterSvg.svg": "9e81987cd50490ebe7068479e7c7424b",
"assets/assets/svgs/twitterWhiteSvg.svg": "004403f6800e50385e0cce4574b766b1",
"assets/assets/svgs/userSvg.svg": "06a939edeb4eb654373928806e6b0344",
"assets/assets/svgs/whatsappSvg.svg": "d45e64045f840f13b58e5a4b5ebb3131",
"assets/assets/svgs/youtubeWhiteSvg.svg": "21bb396a4d1d9edb6a3d815e414015fe",
"assets/FontManifest.json": "fa2a9f10f4e39934f817a74324ed95d6",
"assets/fonts/MaterialIcons-Regular.otf": "beb6f3c1f40f7ec7b84ce5920ac49a99",
"assets/fonts/PlusJakartaSans-Regular.ttf": "f539ae4a8884822210a4553cc88ca3dc",
"assets/NOTICES": "27a770a766aef0856ff0393b710de047",
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
"flutter_bootstrap.js": "1672d5f043dd35ee536cc1588d1ad10f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d6894326d9c55db09e0422d8fd7d99d8",
"/": "d6894326d9c55db09e0422d8fd7d99d8",
"main.dart.js": "5c88ed6438c23904816b908f13bc3e1b",
"manifest.json": "01636d673100c88d3e6e8a62f35a661f",
"version.json": "ee3711f07d54458860574766e15d49d8"};
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
