const Client = require('./model')

const createClient = async (req, res) => {
    const newClient = new Client({
        name: req.body.name,
        address: req.body.address,
        mobile: req.body.mobile,
        email: req.body.mobile
    })
    await newClient.save((error, clientSaved) => {
        if (error) {
            console.error('Error saving client', error)
            res.status(500).send(error)
        } else {
            res.status(201).send({ clientSaved })
        }
    })
}

const getClient = async (req, res) => {
    try {
        const clients = await Client.findOne({ _id: req.params.id })
        res.status(200).send(clients)
    } catch {
        res.status(404)
        res.send({ error: "client doesn't exist!" })
    }
}

const updateClient = async (req, res) => {
    try {
        const updatedClient = await Client.findOne({ _id: req.params.id })
        if (req.body.name) {
            updatedClient.name = req.body.name
        }
        if (req.body.address) {
            updatedClient.address = req.body.address
        }
        if (req.body.mobile) {
            updatedClient.mobile = req.body.mobile
        }
        if (req.body.email) {
            updatedClient.email = req.body.email
        }
        await updatedClient.save()
        res.send(updatedClient)
    } catch (error){
        res.status(404)
        res.send({ error: "Client doesn't exist!: " + error})
    }
}

const deleteClient = async (req, res) => {
    try {
        await Client.deleteOne({ _id: req.params.id })
        res.status(204).send()
    } catch {
        res.status(404)
        res.send({ error: "Client doesn't exist!" })
    }
}


module.exports = { createClient, getClient, updateClient, deleteClient }