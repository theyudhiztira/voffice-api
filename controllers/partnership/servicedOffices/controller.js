const model = require('../../../models/partnership')
const hero = require('../../../lib/hero');


/**
 * 
 * @param {number} locationId 
 * @returns {object} Resulting promise resolve / reject but it depends on the result of the query
 */
exports.getServicedOffices = (locationId, params) => {
    let whereClause = hero.paramFilter([
        'status',
        'view'
    ], params);
    
    whereClause.location_id = locationId;

    return new Promise(async (resolve, reject) => {
        const data = await hero.paginate(model.serviced_offices, params.page, params.limit , {where: whereClause});

        if(!data){
            return reject({
                message: 'Data is empty'
            })
        }

        return resolve(data)
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
            include: {
                model: model.client_plan,
                attributes: {
                    exclude: ["created_by", "created_at", "updated_at"]
                }
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