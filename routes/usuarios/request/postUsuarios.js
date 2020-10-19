let mysqlClient = require('../../../db/connection')
let { generateDataToSend } = require('../../../libs/response/response')

module.exports = postUsuarios = async (req, res) =>{
 
    try {
        let response =  await mysqlClient.consultar(
        `INSERT INTO usuarios
        (nombre, apellido, telefono, email, direccion) VALUES
        ('${req.body.nombre}', '${req.body.apellido}', '${req.body.telefono}', '${req.body.email}', '${req.body.direccion}');
        `)
    res.status(200).send(generateDataToSend(0, response, 'usuarios creado correctamente'))
    
    } catch (error) {
        res.status(200),send(generateDataToSend(1, error, 'error creando usuario'))
    }
 
}