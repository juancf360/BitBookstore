const mongoose = require('mongoose')
Schema = mongoose.Schema;

const bookSchema = new mongoose.Schema({
    cover: String, 
    name: String, 
    description: String, 
    cost: Number, 
    category: String
})
const Book = new mongoose.model('books', bookSchema);

module.exports = Book