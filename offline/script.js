
// Check if service worker is supported by the browser
if(navigator.serviceWorker) {
    //Register service worker

    navigator.serviceWorker
    .register('./sw.js', {
        scope: './'
    })
    .then((res)=> {
        console.log('Service Worker register successfully');
    })
    .catch((err)=> {
        console.log('Error while registering the service worker. Please try again later!', err);
    })
}