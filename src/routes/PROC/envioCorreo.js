/*
    Acceso de aplicaciones poco seguras (GMAIL)
        https://myaccount.google.com/lesssecureapps
*/
// requerimos el paquete del nodemailer
var nodemailer = require('nodemailer');

var modulos = require('../../exportar');
var correo = require('../../UTILIDADES/envio_correo');
modulos.router.post('/envioCorreo', (req, res) => {
    console.log('enviando...')

            var enviar = {
                from: 'silc.im.test@gmail.com',
                to: 'eliasmdominguez@gmail.com,silc.im.test@gmail.com',
                subject: '1_ejemplo',
                text: 'Elías Domínguez test',
                html: '<h1>HOLA</h1>'
            }
            var respuesta = correo.enviar('', enviar);
            res.json({ respuesta });
    }
);

module.exports = modulos.router;