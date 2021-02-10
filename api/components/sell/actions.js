const Sell = require('./model')

const createSell = async (req, res) => {
    const newSell = new Sell({
        date: req.body.date,
        total: req.body.total,
        idClient: req.body.idClient,
        details: req.body.details
    })
    await newSell.save((error, sellSaved) => {
        if (error) {
            console.error('Error saving sell', error)
            res.status(500).send(error)
        } else {
            res.status(201).send({ sellSaved })
        }
    })
}

const getSell = async (req, res) => {
    await Sell.findOne({ _id: req.params.id }, (error, sells) => {
        if (error) {
            console.error('Error getting sell', error)
            res.status(500).send(error)
        } else {
            res.status(201).send({ sells })
        }
    })
}

const updateSell = async (req, res) => {
    try {
        const updatedSell = await Sell.findOne({ _id: req.params.id })
        if (req.body.date) {
            updatedSell.date = req.body.date
        }
        if (req.body.total) {
            updatedSell.total = req.body.total
        }
        if (req.body.idClient) {
            updatedSell.idClient = req.body.idClient
        }
        if (req.body.details) {
            updatedSell.details = req.body.details
        }
        await updatedSell.save()
        res.send(updatedSell)
    } catch (error) {
        res.status(404)
        res.send({ error: "Sell doesn't exist!: " + error})
    }
}

const deleteSell = async (req, res) => {
    try {
        await Sell.deleteOne({ _id: req.params.id })
        res.status(204).send()
    } catch (error){
        res.status(404)
        res.send({ error: "Sell doesn't exist!: " + error})
    }
}



module.exports = { createSell, getSell, updateSell, deleteSell }