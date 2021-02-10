const { response } = require('express')
const router = require('express').Router()
const { getDetail, createDetail, updateDetail, deleteDetail }  = require('./actions')
// GET by ID

router.get('/:id', getDetail)

// POST Create

router.post('/', createDetail)

// PUT Update info

router.put('/:id', updateDetail)

// DELETE by ID

router.delete('/:id', deleteDetail)

module.exports = router