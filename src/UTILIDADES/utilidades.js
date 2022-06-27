module.exports = {
    generarPWd: function () {
        let caracteres = "abcdefghijkmnpqrtuvwxyzABCDEFGHJKMNPQRTUVWXYZ2346789";
        let contrasena = "";
        for (i = 0; i < 5; i++) contrasena += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
        return contrasena;
    },
};