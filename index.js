let express = require('express')
let app = express()
let cors = require('cors')
bodyParser = require('body-parser')

app.use(cors())


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let router = require('./routes/router')
app.use('/api/', router)

let port = 2000
let server = app.listen(port, () => {
    console.log(`server on port  ${port}`)
  })