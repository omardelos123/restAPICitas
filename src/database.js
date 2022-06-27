var sql = require("mssql");


const config = new sql.ConnectionPool({
    /*server: "sql5050.site4now.net", // Use your SQL server name
    database: "DB_A53B4B_silc1", // Database to connect to
    user: "DB_A53B4B_silc1_admin", // Use your username
    password: "dar-2019-EJO", // Use your password
    port: 1433,
    options: {
        encrypt: true
    }*/

    server: 'HOME-PC\\SQLEXPRESS',
    // // // server: '192.168.255.4',
    user: 'sa',
    // // password: 'root',
    password: 'disi123',
    //database: 'DB_A53B4B_silc1'
    database: 'examen'
});


module.exports = config;