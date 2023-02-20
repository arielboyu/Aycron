Se creó un proyecto con React, y usamos redux para guardar el flujo de los datos. Podemos ingresar al dashboard mediante los usuarios admin o login 
y la password 1234. El admin tiene la opcion de buscar las 3 tiendas más cercanas y el user puede agregar o eliminar una tienda de la lista.
Para Localizar los puntos en el mapa usamos la api de maps de google. Para gestionar las referencias mas cercanas utilizams geocode para traducir 
las direcciones a coordenadas, luego  iteramos nuestras tiendas alojadas calculamos la distancia segun la direccion ingresada por el admin y guardamos 
cada distancia en su respecta tienda, luego ordenamos este arreglo de menor distancia a mayor y referenciamos los valores en el mapa, el mas cercano
tendra pintada la ruta dentro del mapa con el metodo DirectionsRenderer y las referencias con InfoWindow.Se utilizo react.toast para gestionar alertas 
de validación y tareas realizadas.



<p align='center'>
    <img src='https://i.ibb.co/m60S7TQ/Whats-App-Image-2023-02-20-at-20-13-00.jpg' </img>
</p>
