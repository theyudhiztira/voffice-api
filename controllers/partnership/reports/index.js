const model = require('../../../models/partnership')
const { Op } = require('sequelize')

module.exports = {
    get: async (req, res) => {
        const data = await model.partner_report_files.findAll({
            where: {
                location_id: req.userData.locationId
            },
            include: {
                model: model.users,
                attributes: [
                    'id',
                    'email',
                    'first_name',
                    'last_name'
                ]
            }
        });

        return res.status(200).send(data)
    }
}

