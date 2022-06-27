var modulos = require('../../exportar');
modulos.router.post('/PROC_cargar_fabricante', (req, res) => {
    console.log('PROC_cargar_fabricante');
    if (!req.body.token) {
        res.status(401).send({
            error: "Es necesaria la autenticación al sistema."
        });
        return
    } else {
        var valido = modulos._token.validar(req.body.token);
        if (valido == true) {
            var Type_CARGAR_FABRICANTE = new modulos.sql.Table();
            Type_CARGAR_FABRICANTE.columns.add('nombre', modulos.sql.NVarChar(150));
            Type_CARGAR_FABRICANTE.columns.add('descripcion', modulos.sql.NVarChar(150));


            console.log("array tamaño---->>>  ", req.body.matriz.length);
            console.log("array matriz exponer ---->>>  ", req.body.matriz);

            for (var i = 0; i < req.body.matriz.length; i++) {
                console.log("<<<<----->>>>>  ", req.body.matriz[i][1]);
                Type_CARGAR_FABRICANTE.rows.add(req.body.matriz[i][0], req.body.matriz[i][1]);
            }


            console.log("tabla ", Type_CARGAR_FABRICANTE);


            modulos.sql.connect(modulos.config, function (err) {
                var request = new modulos.sql.Request(modulos.config);
                request.input('tbl_CARGAR_FABRICANTE', Type_CARGAR_FABRICANTE);
                request.input('id_compania', modulos.sql.Int, req.body.id_compania);
                request.input('usuario_crea', modulos.sql.Int, req.body.usuario_crea);

                request.execute('PROC_cargar_fabricante').then(function (rows) {
                   // console.log('err', err);
                   // console.log('recordsets', recordsets);
                   // console.log('returnValue', returnValue);
                    res.json(rows);
                    modulos.sql.close();
                }).catch(function (err) {
                    console.log(err);
                    res.json(err);
                    modulos.sql.close();
                });

            });


        } else {
            res.status(401).send({
                error: 'Su sesión ha expirado'
            });
        }
    }
});

module.exports = modulos.router; 