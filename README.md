Se creó un proyecto con React, y usamos redux para guardar el flujo de los datos. Podemos ingresar al dashboard mediante los usuarios admin o user 
y la password 1234. El admin tiene la opcion de buscar las 3 tiendas más cercanas y el user puede agregar o eliminar una tienda de la lista.
Para Localizar los puntos en el mapa usamos la api de maps de google. Para gestionar las referencias mas cercanas utilizams geocode para traducir 
las direcciones a coordenadas, luego  iteramos nuestras tiendas alojadas calculamos la distancia segun la direccion ingresada por el admin y guardamos 
cada distancia en su respecta tienda, luego ordenamos este arreglo de menor distancia a mayor y referenciamos los valores en el mapa, el mas cercano
tendra pintada la ruta dentro del mapa con el metodo DirectionsRenderer y las referencias con InfoWindow.Se utilizo react.toast para gestionar alertas 
de validación y tareas realizadas.
Podemos correr el proyecto con npm install y luego npm start en la raiz del mismo.

https://aycron.netlify.app/ en el siguiente link puedes testear el flujo del proyecto. a continuación algunas capturas.



<p align='center'>
    <img src='https://i.ibb.co/m60S7TQ/Whats-App-Image-2023-02-20-at-20-13-00.jpg' </img>
</p>

En esta Imagen podemos ver cuando el admin ingresa una dirección , y la app nos calcula la ruta al destino mas cercano y los 2 puntos referenciados a las siguientes direcciones mas cercanas con las referencias 1 2 y 3.

<p align='center'>
    <img src='https://i.ibb.co/CVLqRZk/Whats-App-Image-2023-02-20-at-20-52-02.jpg' </img>
</p>
