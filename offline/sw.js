// In browser we use document object to listen or add event but here
// In service worker we use this or self for event listeining or adding


const CACHE_NAME = 'offline/v4';

const CACHE_FILES = [
    './index.html',
    './photo.png',
    './script.js',
    './style.css'
]

self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            cache.addAll(CACHE_FILES)
        })
    )
})

self.addEventListener('activate', (e) => {

    // Cleanup the unwanted cache
    e.waitUntil(
        caches.keys().then(keyLists => {
            return Promise.all(
                keyLists.map((key) => {
                    if (key != CACHE_NAME) {
                        return caches.delete(key);
                    }
                })
            )
        })
    )

})

self.addEventListener('fetch', (e) => {
    // Offline experience
    // Whenever a file is requested
    // 1. fetch from network, update the cache, take cache as a fallback - best way because we will fetch data from network and take cahche as fallback
    // 2. check the cache, and return from cache. if not available, fetch from the network - worst way because in this case, we will never fetch data from the network

    e.respondWith(
        fetch(e.request)
            .then((res) => {
                const clonedData = res.clone();

                //update the cache
                caches.open(CACHE_NAME).then(cache => {
                    cache.put(e.request, clonedData)
                })

                return res;
            })
            .catch(() => {
                return caches.match(e.request).then(file => file)
            })
    )


})