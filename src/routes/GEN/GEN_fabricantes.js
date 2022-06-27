var modulos = require('../../exportar');
modulos.router.post('/GEN_fabricantes', (req, res) => {
    console.log('GEN_fabricantes');
    if (!req.body.token) {
        res.status(401).send('Es necesaria la autenticación al sistema.');
        return
    } else {
        var valido = modulos._token.validar(req.body.token);
        if (valido == true) {
		    modulos.config.connect(function (err) {
                var request = new modulos.sql.Request(modulos.config);
                let query = 
                `select id_fabricante,nombre,descripcion from fabricantes order by nombre `;
        
                request.query(query).then(function(row){
                    res.json(row);
                    modulos.sql.close();
                }).catch(function(err){
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