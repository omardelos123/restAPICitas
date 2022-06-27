var modulos = require('../../exportar');
modulos.router.post('/CRUD_citas', (req, res) => {
    console.log('CRUD_citas');
    if (!req.body.token) {
        res.status(401).send('Es necesaria la autenticación al sistema.');
        return
    } else {
        var valido = modulos._token.validar(req.body.token);
        if (valido == true) {
            modulos.config.connect(function(err) {
                var request = new modulos.sql.Request(modulos.config);
                console.log("req.body.hora: ", req.body.hora);
                request.input('placa', modulos.sql.VarChar(50), req.body.placa);
                request.input('fecha', modulos.sql.Date, req.body.fecha);
                request.input('hora', modulos.sql.VarChar(50), req.body.hora);
                request.input('estado', modulos.sql.VarChar(50), req.body.estado);
                request.input('sw_activo', modulos.sql.Int, req.body.sw_activo);
                request.input('accion_tipo', modulos.sql.Char(1), req.body.accion_tipo);
                request.execute('CRUD_citas').then(function(rows) {
                    res.json(rows);
                    modulos.sql.close();
                }).catch(function(err) {
                    res.json(err);
                    modulos.sql.close();
                });

            });
        } else {
            res.status(401).send('Su sesión ha expirado');
        }
    }
});

module.exports = modulos.router;