//ASIGNAR NOMBRE Y VERSION DE CACHE
const CACHE_NAME='v1_cache';
//Instalacion de l service worker
self.addEventListener('install',(event)=>{
    event.waitUntil(
        caches.open('mi-cache').then((cache)=>{
            return cache.addAll([//CACHE_NAME;
                './',
                './favicon.ico',
                './index.html',
                './style.css',
                './manifest.json',
                './sw.js',
                './main.js',
                './img/altar.jpg',
                './img/altar2.jpg',
                './img/altar3.jpg',
                './img/comida.jpg',
                './img/comida2.jpg',
                './img/comida3.jpg',
                './img/favicons/misa-16.png',
                './img/favicons/misa-1024.png',
                
            ]);
        })
    );
});

//Activacion del service worker
self.addEventListener('activate', (event)=>{
    event.waitUntil(
        caches.keys().then((cacheNames)=>{
            return Promise.all(
                cacheNames.map((cacheName)=>{
                    if(cacheName !== 'mi-cache'){
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
//Interpreta las solicitudes y maneja las respuestas desde la caché
self.addEventListener('fetch',(event)=>{
    event.respondWith(
        caches.match(event.request).then((response)=>{
            return response || fetch(event.request);
        })
    );
});