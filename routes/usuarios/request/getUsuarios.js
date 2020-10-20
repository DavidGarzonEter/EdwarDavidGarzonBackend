let mysqlClient = require('../../../db/connection')
let {generateDataToSend} = require('../../../libs/response/response')



module.exports = getUsuarios = async (req, res) => {
    try {
        let response = await mysqlClient.consultar(`SELECT
        usuarios.id,
        usuarios.nombre,
        usuarios.apellido,
        usuarios.telefono, 
        usuarios.email,
        usuarios.direccion 

         FROM usuarios
             
         `)
        res.status(200).send(generateDataToSend(0, response, 'datos de usuario capturados correctamente'))
        
    } catch (error) {
        res.status(200).send(generateDataToSend(1, error,  'error capturando datos usuario'))       
    }
    
}

