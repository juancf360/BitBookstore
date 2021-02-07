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


// const bookSchema = new mongoose.Schema({
//     cover: String, 
//     name: String, 
//     description: String, 
//     cost: String, 
//     category: String
// })
// const Book = new mongoose.model('books', bookSchema);

// const detailsSchema =  new mongoose.Schema({
//     idBook:{ type: Schema.ObjectId, ref: "Book" },
//     book: String,
//     cost: Number,
//     quantity: Number
// })
// const Detail = new mongoose.model('details', detailsSchema);

// const sellSchema =  new mongoose.Schema({ 
//     date: Date, 
//     total: Number, 
//     idClient:{ type: Schema.ObjectId, ref: "Client" },
//     details: [detailsSchema]
// })
// const Sell = new mongoose.model('sells', sellSchema);



module.exports = Client
