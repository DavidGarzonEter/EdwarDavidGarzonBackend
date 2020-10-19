let mysqlClient = require('../../../db/connection')
let {generateDataToSend} = require('../../../libs/response/response')

module.exports = deleteUsuarios = async (req,res) =>{
    try {
        let response = await mysqlClient.consultar(`
        DELETE FROM usuarios WHERE
        id='${req.params.id}'`)
        res.status(200).send(generateDataToSend(0, response, 'usuario eliminado correctamente'))
        
    } catch (error) {
        res.status(200).send(generateDataToSend(1, error, 'error eliminando usuario'))
        
    }

}