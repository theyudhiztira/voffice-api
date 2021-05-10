const model = require('../../models');
const {
  Op
} = require('sequelize');
const moment = require('moment')


exports._create = async (params) => {
  const companies = await model.companies
      .findOne({
        where: {
          [Op.or]: [
            {
              email: params.email
            },
            {
              phone: params.phone
            }
          ]
        }
      });

  if(companies) {
    return {
      status: 400,
      message: companies.email === params.email ? `Companies email is already in use (${companies.id})` : `Companies phone is already in use (${companies.id})`
    }
  }
  
  params.created_at = moment().format('Y-m-d');
  params.updated_at = moment().format('Y-m-d');
      
  return await model.clients
    .create(params)
    .then((resultCompanies) => {
        return {
          status: 200,
          message: 'Successfully Create Client.'
      };
    })
    .catch(err => {
        return {
          status: 500,
          message: err.message
      }
    })
}


exports._get = async (filter) => {
  const companies = await model.companies
      .findAll({
        where: filter
      });

      if(!companies) {
        return {
          status: 400,
          message:  `Client doesn't exists!`
        }
      }

      return {
        status: 200,
        companies: companies
      }
}