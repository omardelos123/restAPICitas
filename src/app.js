'use strict'
const express = require('express');
const app = express();
const sql = require('mssql'); //para la conexion.  
var modulos = require('./exportar');
// const server2 = require('http').createServer(app)
const http = require('http').Server(app)
    //variables para configuracion del socket io
    // const io = require('socket.io')(server);
const puerto = process.env.PORT || 3000;


let socketIO = require('socket.io');
let io = socketIO(http);


/*validacion para comprobar que el server esta arriba 
si no entonces lo vuelve a levantar */


// server2 = app.listen(3000, console.log("Socket.io Hello Wolrd server started!"));
const cnn = http.listen(puerto, function() {

    console.log('Listening on port ' + puerto);

    cnn.setTimeout(60000); // 60 segundos de espera

});
// CONFIGURACIONES DEL SERVIDOR
// app.set('port', process.env.PORT || 3000)

// MIDDLEWARES (Funciones que se ejecutan antes de que preceses algo)
// app.use(express.urlencoded({ extended: false }));

app.use(express.json({ limit: '50mb' })); //recibe o combierte la informaciona json para ser lejible por express.
app.use(express.urlencoded({ limit: '50mb' }));

// CRUDs
modulos.router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
modulos.router.get('/', (req, res) => {
    res.send('Hola Humano!');
});


app.use(require('./routes/CRUD/CRUD_fabricantes'));
app.use(require('./routes/CRUD/CRUD_citas'));
app.use(require('./routes/GEN/GEN_login_control_acceso'));
app.use(require('./routes/PROC/PROC_dashboard'));
app.use(require('./routes/GEN/GEN_fabricantes'));
app.use(require('./routes/PROC/PROC_cargar_fabricante'));


module.exports = { app, sql, io };