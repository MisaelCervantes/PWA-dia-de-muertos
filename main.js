//Configurar Service Worker
alert('hola')
if('serviceWorker' in navigator){
    navigator.serviceWorker
    .register('sw.js')//Ruta al archivo del serviceWorker 
    .then(function (registration){
        // El serviceWorker se ha registrado correctamente
        console.log('Service Worker registrado  con exito.', registration);
    })
    .catch(function(error){
        //Hubo un  error al registrar el service Worker
        console.log('Error al registrar el Service Worker:');
    
    });
}else{
    console.error('Error no soporta el Service Worker');
}