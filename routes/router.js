let express = require('express')
let router = express.Router()

let usuariosServices = require('./usuarios/usuarios')


router.use('/usuarios', usuariosServices )

module.exports = router

