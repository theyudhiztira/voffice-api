const model = require('../../models');
const {
    Op
} = require('sequelize');
const controller = require('./controller');
const hero = require('../../lib/hero');
const moment = require('moment')

exports._create = async (params) => {

    params.created_at = moment().format('Y-m-d');
    params.updated_at = moment().format('Y-m-d');
    
    return await model.invoices_ht
        .create(params)
        .then((result) => {
            return {
                status: 200,
                result: result
            }
        }).catch(err => {
            return {
                status: 500,
                result: err.message
            }
        });
}

exports._get = async (filter) => {
    const invoices = await model.invoices_ht
        .findAll({
            where: filter
        });

    if (!invoices){
        return {
            status: 400,
            result: `Invoice doesn't exists!`
        }
    }
    
    return {
        status: 200,
        result: invoices
    }
}

exports._edit = async (params, invoice_id) => {
    const invoice = await model.invoices_ht
        .findOne({
            where: {
                id: invoice_id
            }
        });

    if (!invoice){
        return {
            status: 400,
            result: `Invoice with ID (${invoice_id}) not found!`
        }
    }
    
    return await model.invoices_ht
        .update(params, {
            where: {
                id: invoice_id
            }
        })
        .then(() => {
            return {
                status: 200,
                result: 'Successfully Update Invoice.'
            };
        }).catch(err => {
            return {
                status: 500,
                result: err.message
            }
        });
}