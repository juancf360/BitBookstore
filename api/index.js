const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
require('./db')

// Routes
const clientRoutes = require('./components/client/routes')
const bookRoutes = require('./components/book/routes')
const detailsRoutes = require('./components/detail/routes')
const sellsRoutes = require('./components/sell/routes')

app.use(express.json())
app.use(bodyParser.json())
app.use(cors())
app.use('/clients', clientRoutes)
app.use('/books', bookRoutes)
app.use('/details', detailsRoutes)
app.use('/sells', sellsRoutes)

app.listen(3000, () => {
    console.log('El servidor esta encendido')
})