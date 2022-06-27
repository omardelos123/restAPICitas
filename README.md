# SILC-im_rest-api
Es un webservice tipo REST el cual valide usando JWT

# Estructura
Separe por carpetas dependiendo de la funcion que realiza cada metodo con respecto a la aplicacion que lo convoca.

Tengo una clase que genera un token necesario para poder consumir los servicios e interactuar con la aplicacion.

Tengo una clase dedicada solamente a las conexiones de la base de datos.

Tengo otra clase que contiene las importaciones de los modulos usados en todo el entorno del servicio web.

# Ejecucion
Para poder ejecutar el servicio web se necesita realizar lo siguiente:
* Ejecutar el comando para instalar todos los modulos necesarios: npm install

* Para ejecutar el servicio web se utiliza el siguiente comando: npm run dev