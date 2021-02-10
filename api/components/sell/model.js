const mongoose = require('mongoose')
Schema = mongoose.Schema;

const detailsSchema =  new mongoose.Schema({
    idBook:{ type: Schema.ObjectId, ref: "Book" },
    book: String,
    cost: Number,
    quantity: Number
})
const Detail = new mongoose.model('details', detailsSchema);

const sellSchema =  new mongoose.Schema({ 
    date: Date, 
    total: Number, 
    idClient:{ type: Schema.ObjectId, ref: "Client" },
    details: [detailsSchema]
})
const Sell = new mongoose.model('sells', sellSchema);


module.exports = Sell