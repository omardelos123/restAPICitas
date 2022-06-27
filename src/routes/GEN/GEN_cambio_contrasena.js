var modulos = require('../../exportar');
modulos.router.post('/GEN_cambio_contrasena', (req, res) => {
    console.log('GEN_cambio_contrasena');
    modulos.config.connect(function (err) {
        var request = new modulos.sql.Request(modulos.config);
        request.input('id_compania', modulos.sql.Int, req.body.id_compania);
        request.input('id_usuario', modulos.sql.Int, req.body.id_usuario);
        request.input('contrasena', modulos.sql.VarChar(100), req.body.n_contrasena);
        request.input('usuario_actualiza', modulos.sql.Int, req.body.usuario_actualiza);
        request.input('accion_tipo', modulos.sql.Char(1), req.body.accion_tipo);
        request.execute('GEN_cambio_contrasena').then(function (rows) {
            res.json(rows);
            modulos.sql.close();
        }).catch(function (err) {
            res.json(err);
            modulos.sql.close();
        });

    });

});

module.exports = modulos.router;