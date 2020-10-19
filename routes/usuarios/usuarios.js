let express = require('express')
let router = express.Router()


let getUsuarios = require('./request/getUsuarios')
let postUsuarios = require('./request/postUsuarios')
let putUsuarios = require('./request/putUsuarios')
let deleteUsuarios = require('./request/deleteUsuarios')
let getDetalleUsuarios = require('./request/getDetalleUsuarios')

router.route('/')
    .get(getUsuarios)
    .post(postUsuarios)
    .put(putUsuarios)

router.route('/:id')
    .delete(deleteUsuarios)
    .get(getDetalleUsuarios)

module.exports = router