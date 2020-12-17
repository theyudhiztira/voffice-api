const model = require('../../../models/partnership')


/**
 * 
 * @param {number} locationId 
 * @returns {object} Resulting promise resolve / reject but it depends on the result of the query
 */
exports.getServicedOffices = (locationId) => {
    return new Promise(async (resolve, reject) => {
        const data = await model.serviced_offices.findAll({
            where: {
                location_id: locationId
            },
            attributes: {
                exclude: ["created_by", "created_at", "updated_at"]
            }
        });

        if(!data){
            return reject({
                message: 'Data is empty'
            })
        }

        return resolve({
            data: data
        })
    })
}

/**
 * @param {number} roomId The unique ID of serviced office ($roomId)
 * @returns {object} Return promise resolve / reject
 */
exports.getDetails = (roomId) => {
    return new Promise(async (resolve, reject) => {
        const data = await model.serviced_offices.findByPk(roomId, {
            attributes: {
                exclude: ["created_by", "created_at", "updated_at"]
            },
            includes: {
                
            }
        });
    })
}