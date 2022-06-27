module.exports = {
    llenar_informacion: function (usuario, contrasena, nombre, datos, url_origin) {
        var html = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Credenciales</title>
            <style>
                body {
                    margin: 0px;
                    padding: 0px;
                }
            
                .encabezado {
                    padding: 10px;
                    margin: 0;
                    background-color: #20a8d8 !important;
                    color: white;
                }
            
                .cuerpo {
                    padding: 10px;
                }
            
                .button {
                    background-color: #20a8d8;
                    border: none;
                    color: white;
                    padding: 15px 32px;
                    text-align: center;
                    text-decoration: none;
                    display: inline-block;
                    font-size: 16px;
                }
            
                .pie {
                    padding: 10px;
                }
            
                .pie .disclaimer {
                    color: #b3b3b3;
                    text-align: justify;
                }
            </style>
        </head>
        <body>
            <div class="encabezado">
                <h1>SILC-im</h1>
                <h2>Sistema integrado logístico computarizado – inventario y mantenimiento</h2>
                <div>
                    <em>Teléfonos:
                        <a href="tel:3000000">300-0000</a>/<a href="tel:2000000">200-0000</a> <br> <a target="blank"
                            href="${url_origin}">${url_origin}</a></em>
                </div>
            </div>
            
            <div class="cuerpo">
                <h3>Hola, <b>${nombre}</b>. Bienvenido a SILC-im.</h3>
                <p>Sus credenciales para acceder al sistema: </p>
                <p><b>Usuario:</b> ${usuario}</p>
                <p><b>Contraseña:</b> ${contrasena}</p>
            
                <!-- <div>
                <a href="${url_origin}/#/restablecer-contrasena/${datos}" class="button">ENTRAR</a>
              </div> -->
            </div>
            
            <div class="pie">
                <div class="disclaimer">
                    <p>
                        El contenido de este correo es confidencial y puede ser objeto de acciones legales. Es dirigido solo para el
                        o los destinatarios(s) nombrados anteriormente. Si no es mencionado como destinatario, no debe leer, copiar,
                        revelar, reenviar o utilizar el contenido de este mensaje. Si ha recibido este correo por error, por favor
                        notifique al remitente y proceda a borrar el mensaje y archivos adjuntos sin conservar copias.
                    </p>
                    <p>
                        The information contained in this e-mail is confidential and may also be subject to legal privilege. It is
                        intended only for the recipient(s) named above. If you are not named as a recipient, you must not read,
                        copy, disclose, forward or otherwise use the information contained in this email. If you have received this
                        e-mail in error, please notify the sender immediately by reply e-mail and delete the message and any
                        attachments without retaining any copies.
                    </p>
                </div>
            </div>   
        </body>
        </html>
        
        
                `;
        return html;
    },
};