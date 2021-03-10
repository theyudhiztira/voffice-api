const model = require('../../../models/partnership')
const { Op } = require('sequelize')

module.exports = {
    get: async (req, res) => {
        const data = await model.partner_report_files.findAll();

        return res.status(200).send(data)
    }
}

