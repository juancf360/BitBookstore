const Detail = require('../sell/model')

const createDetail = async (req, res) => {
    const newDetail = new Detail({
        idBook: req.body.idBook,
        book: req.body.book,
        cost: req.body.cost,
        quantity: req.body.quantity
    })
    await newDetail.save((error, detailSaved) => {
        if (error) {
            console.error('Error saving book', error)
            res.status(500).send(error)
        } else {
            res.status(201).send({ detailSaved })
        }
    })
}

const getDetail = async (req, res) => {
    await Detail.findOne({ _id: req.params.id }, (error, details) => {
        if (error) {
            console.error('Error getting detail', error)
            res.status(500).send(error)
        } else {
            res.status(201).send({ details })
        }
    })
}

const updateDetail = async (req, res) => {
    try {
        const updatedDetail = await Detail.findOne({ _id: req.params.id })
        if (req.body.idBook) {
            updatedDetail.idBook = req.body.idBook
        }
        if (req.body.book) {
            updatedDetail.book = req.body.book
        }
        if (req.body.cost) {
            updatedDetail.cost = req.body.cost
        }
        if (req.body.quantity) {
            updatedDetail.quantity = req.body.quantity
        }
        await updatedDetail.save()
        res.send(updatedDetail)
    } catch (error) {
        res.status(404)
        res.send({ error: "Detail doesn't exist!: " + error})
    }
}

const deleteDetail = async (req, res) => {
    try {
        await Detail.deleteOne({ _id: req.params.id })
        res.status(204).send()
    } catch (error){
        res.status(404)
        res.send({ error: "Detail doesn't exist!: " + error})
    }
}



module.exports = { createDetail, getDetail, updateDetail, deleteDetail }