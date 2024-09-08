// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('/service-worker.js')
//         .then(function(registration) {
//             console.log('Service Worker registered with scope:', registration.scope);
//         }).catch(function(error) {
//             console.error('Service Worker registration failed:', error);
//         });
// }


self.addEventListener('push', function(event) {
    const data = event.data.json();
    const options = {
        body: data.notification.body,
        icon: data.notification.icon
    };

    event.waitUntil(
        self.registration.showNotification(data.notification.title, options)
    );
});





