const {Smell} = require('../models/models')
const ApiError = require('../error/ApiError');

class SmellController {
    async create(req, res) {
        const {name} = req.body
        const type = await Type.create({name})
        return res.json(type)
    }

    async getAll(req, res) {
        const smells = await Type.findAll()
        return res.json(smells)
    }

}

module.exports = new SmellController()
