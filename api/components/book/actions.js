const Book = require('./model')

const createBook = async (req, res) => {
    const newBook = new Book({
        cover: req.body.cover,
        name: req.body.name,
        description: req.body.description,
        cost: req.body.cost,
        category: req.body.category
    })
    await newBook.save((error, bookSaved) => {
        if (error) {
            console.error('Error saving book', error)
            res.status(500).send(error)
        } else {
            res.status(201).send({ bookSaved })
        }
    })
}

const getBook = async (req, res) => {
    await Book.findOne({ _id: req.params.id }, (error, books) => {
        if (error) {
            console.error('Error getting book', error)
            res.status(500).send(error)
        } else {
            res.status(201).send({ books })
        }
    })
}

const updateBook = async (req, res) => {
    try {
        const updatedBook = await Book.findOne({ _id: req.params.id })
        if (req.body.cover) {
            updatedBook.cover = req.body.cover
        }
        if (req.body.name) {
            updatedBook.name = req.body.name
        }
        if (req.body.description) {
            updatedBook.description = req.body.description
        }
        if (req.body.cost) {
            updatedBook.cost = req.body.cost
        }
        if (req.body.category) {
            updatedBook.category = req.body.category
        }
        await updatedBook.save()
        res.send(updatedBook)
    } catch (error) {
        res.status(404)
        res.send({ error: "Book doesn't exist!: " + error})
    }
}

const deleteBook = async (req, res) => {
    try {
        await Book.deleteOne({ _id: req.params.id })
        res.status(204).send()
    } catch (error){
        res.status(404)
        res.send({ error: "Book doesn't exist!: " + error})
    }
}



module.exports = { createBook, getBook, updateBook, deleteBook }