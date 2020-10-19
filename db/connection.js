var mysql = require('mysql');
var connection 


try {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'prueba_woobsing'
    });

    connection.connect();
    console.log('conexion a la DB realizada correctamente')
} catch (error) {
    console.log('Error en la conexion con la DB')
}

function consultar(query) {
    return new Promise((resolve, reject) => {
        connection.query(query, function (error, results, fields) {
            if (error) {
                reject(error)
            } else {
                resolve(results)
            }
        });
    })
}


exports.consultar = consultar