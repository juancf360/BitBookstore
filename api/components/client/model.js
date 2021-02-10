const mongoose = require('mongoose')
Schema = mongoose.Schema;

const clientSchema = new mongoose.Schema({
    name: String, 
    address: String, 
    mobile: String, 
    email: String, 
    password: String 
})
const Client = new mongoose.model('Clients', clientSchema);

module.exports = Client
