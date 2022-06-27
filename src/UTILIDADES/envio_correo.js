/*
    Acceso de aplicaciones poco seguras (GMAIL)
        https://myaccount.google.com/lesssecureapps
*/
// requerimos el paquete del nodemailer
var nodemailer = require('nodemailer');

module.exports = {
    async enviar(datos_mailOptions) {
        //#region envio de correo electronico

        return new Promise((resolve, reject) => {
            // creamos el objeto de transporte
            var transporte = nodemailer.createTransport({
                host: 'mail.silc-im.com',
                port: 465,
                secure: true, // use SSL
                auth: {
                    type: "login",
                    user: 'info@silc-im.com',
                    pass: 'dar-2019-EJO'
                },
                tls: {
                    rejectUnauthorized: false
                },
                ignoreTLS: false
            });

            // Crear El Objeto de Opciones Con La Información Correspondiente 
            var mailOptions = {
                from: 'info@silc-im.com',
                to: datos_mailOptions.to,
                subject: datos_mailOptions.subject,
                text: datos_mailOptions.text,
                html: datos_mailOptions.html
            }

            // Enviar El Correo
            transporte.sendMail(mailOptions, function (err, info) {
                if (err) {
                    reject(err)
                }
                resolve(info)
            });
        });




        /*
        Allow less secure apps to access account.
        
        
        Activar en la cuenta gmail: 
                                    Acceso de aplicaciones poco seguras
        https://myaccount.google.com/lesssecureapps?pli=1
        */
        //#endregion
    }
};
