const { response } = require('express')
const router = require('express').Router()
const { createClient, getClient, updateClient, deleteClient }  = require('./actions')
// GET by ID

router.get('/:id', getClient)

// POST Create a Client

router.post('/', createClient)

// PUT Update a Client's info

router.put('/:id', updateClient)

// DELETE by ID

router.delete('/:id', deleteClient)

module.exports = router