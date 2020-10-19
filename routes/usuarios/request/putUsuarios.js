let mysqlClient = require('../../../db/connection')

let {generateDataToSend} = require('../../../libs/response/response')


module.exports = putUsuarios = async (req,res) =>{      

    try {
        let response = await mysqlClient.consultar(`
         UPDATE usuarios SET
         nombre='${req.body.nombre}',
         apellido='${req.body.apellido}',         
         telefono='${req.body.telefono}',
         email='${req.body.email}',
         direccion='${req.body.direccion}'
         WHERE
         id='${req.body.id}' `)
        res.status(200).send(generateDataToSend(0, response, 'usuario actualizado correctamente'))
        
    } catch (error) {
        res.status(200).send(generateDataToSend(1, error, 'error actualizando usuario'))
   }
   
}