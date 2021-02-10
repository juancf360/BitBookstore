const { response } = require('express')
const router = require('express').Router()
const { getSell, createSell, updateSell, deleteSell }  = require('./actions')
// GET by ID

router.get('/:id', getSell)

// POST Create

router.post('/', createSell)

// PUT Update info

router.put('/:id', updateSell)

// DELETE by ID

router.delete('/:id', deleteSell)

module.exports = router