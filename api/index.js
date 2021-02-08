const express = require('express')
const app = express()
require('./db')
app.use(express.json())
//const sell = mongoose.model('sell')


// Routes
const clientRoutes = require('./components/client/routes')
const bookRoutes = require('./components/book/routes')

app.use('/clients', clientRoutes)
app.use('/books', bookRoutes)

app.listen(3000, () => {
    console.log('El servidor esta encendido')
})