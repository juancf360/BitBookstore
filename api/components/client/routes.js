const { response } = require('express')
const router = require('express').Router()
const { createClient, getClient, updateClient }  = require('./actions')
// GET by ID

router.get('/:id', getClient)

// POST Create a Client

router.post('/', createClient)

// PUT Update a Client's info

router.put('/:id', updateClient)

// DELETE by ID

router.delete('/:id', (req, res) => {
    res.send('Client succesfully deleted')
})

module.exports = router