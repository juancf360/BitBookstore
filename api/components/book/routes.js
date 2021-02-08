const { response } = require('express')
const router = require('express').Router()
const { getBook, createBook, updateBook, deleteBook }  = require('./actions')
// GET by ID

router.get('/:id', getBook)

// POST Create

router.post('/', createBook)

// PUT Update info

router.put('/:id', updateBook)

// DELETE by ID

router.delete('/:id', deleteBook)

module.exports = router