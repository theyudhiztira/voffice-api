const model = require("../../models");
const {Op} = require("sequelize");
const moment = require("moment");

exports._get = async (filter) => {
  const companies = await model.companies.findAll({
    where: filter,
  });

  if (!companies) {
    return {
      status: 400,
      message: `Company doesn't exists!`,
    };
  }

  return {
    status: 200,
    companies: companies,
  };
};

exports._search = async (filter) => {
  const search = filter;

  const companies = await model.companies.findAll({
    where: {
      [Op.or]: [
        {company_name: {[Op.like]: "%" + search.company_name + "%"}},
        {id: {[Op.like]: "%" + search.id + "%"}},
      ],
    },

    include: {
      model: model.clients,
    },
  });

  if (!companies) {
    return {
      status: 400,
      message: `Client doesn't exists!`,
    };
  }

  return {
    status: 200,
    companies: companies,
  };
};

exports._create = async (params) => {
  const company = await model.companies.findOne({
    where: {
      [Op.or]: [
        {
          company_name: params.company_name,
        },
      ],
    },
  });

  if (company) {
    return {
      status: 400,
      message: `Company is already registered (${company.id})`,
    };
  }

  params.created_at = moment().format("Y-m-d");
  params.updated_at = moment().format("Y-m-d");

  const create = await model.companies.create(params);

  return {
    status: 200,
    message: "Succesfully Create Company",
  };
};

exports._edit = async (params, companyId) => {
  const company = await model.companies.findOne({
    where: {
      id: companyId,
    },
  });

  if (!company) {
    return {
      status: 400,
      message: `Company with ID (${company.id}) not found!`,
    };
  }

  let update = await model.companies.update(params, {
    where: {
      id: companyId,
    },
  });

  return {
    status: 200,
    message: "Successfully Update Client.",
  };
};
