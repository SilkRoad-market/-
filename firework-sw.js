// Файл firework-sw.js
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    clients.claim();
});

self.addEventListener('message', (event) => {
    if (event.data === 'startFirework') {
        // Показываем уведомление с фейерверком
        self.registration.showNotification('Фейерверк!', {
            body: 'Фейерверк продолжается!',
            icon: 'firework-icon.png',
            vibrate: [200, 100, 200],
            tag: 'firework-notification'
        });
        
        // В реальной реализации здесь можно добавить логику для продолжения анимации
        // например, через Web Notifications API или другие методы
    }
});
