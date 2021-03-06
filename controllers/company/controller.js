const model = require("../../models");
const {Op} = require("sequelize");
const moment = require("moment");
const picController = require("../pic/controller");

exports._get = async (filter) => {
  const companies = await model.companies.findAll({
    where: filter,
    include: [
      {
        model: model.pic
      }
    ]
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

exports._getCallContacts = async (companyId) => {
  
  const callContacts = await model.call_contacts.findAll({
    where: {
      company_id: companyId
    },
  });

  if (!callContacts) {
    return {
      status: 400,
      message: `This client doesn't have call contact(s)!`,
    };
  }

  return {
    status: 200,
    result: callContacts,
  };
};

exports._search = async (filter) => {
  const search = filter;

  const companies = await model.companies.findAll({
    where: {
      [Op.or]: [
        {id: {[Op.like]: "%" + search.id + "%"}},
        {company_name: {[Op.like]: "%" + search.company_name + "%"}},
        {pic_id: {[Op.like]: "%" + search.pic_id + "%"}},
      ],
    },

    include: [{
      model: model.pic,
    }],
  });


  if (!companies) {
    return {
      status: 400,
      message: `Client doesn't exists!`,
    };
  }

  console.log(companies);
  return {
    status: 200,
    companies: companies,
  };
};

exports._create = async (params, userID) => {

  const company = await model.companies.findOne({
    where: {
      [Op.or]: [
        {
          company_name: params.company.company_name,
        },
        {
          phone: params.company.phone,
        },
        {
          email: params.company.email,
        }
      ],
    },
  })

  if (company) {
    return {
      status: 400,
      message: `Company is already registered (Company ID: ${company.id})`,
    }
  }

  paramsCompany = params.company
  paramsCompany.status = 'active'
  paramsCompany.created_by = userID
  paramsCompany.created_at = moment().tz('Asia/Jakarta').format("YYYY-MM-D HH:mm:ss")
  paramsCompany.updated_at = moment().tz('Asia/Jakarta').format("YYYY-MM-D HH:mm:ss")

  if (params.new_pic) {
    const createPic = await picController._create(params.pic)

    if (createPic.status !== 200) {
      return {
        status: createPic.status,
        message: createPic.message,
      }
    }

    paramsCompany.pic_id = createPic.data.pic_id
  } else {

    if (!params.pic.pic_id){
      return {
        status: 400,
        message: "Pic ID cannot be null",
      }
    }

    paramsCompany.pic_id = params.pic.pic_id
  }

  return await model.companies.create(paramsCompany)
    .then((result) => {
      
      return {
        status: 200,
        message: "Succesfully Create Company",
      }

    })
    .catch((err) => {

      return {
        status: 500,
        message: err.message,
      }

    })
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

// exports._search = async (filter) => {
//   const search = filter;

//   const companies = await model.companies.findAll({
//     where: {
//       [Op.or]: [
//         {id: {[Op.like]: "%" + search.id + "%"}},
//         {company_name: {[Op.like]: "%" + search.company_name + "%"}},
//         {pic_id: {[Op.like]: "%" + search.pic_id + "%"}},
//       ],
//     },

//     include: [{
//       model: model.pic,
//     }],
//   });


//   if (!companies) {
//     return {
//       status: 400,
//       message: `Client doesn't exists!`,
//     };
//   }

//   console.log(companies);
//   return {
//     status: 200,
//     companies: companies,
//   };
// };

exports._createCall = async (params) => {
  try {
    params.created_at = moment().format("Y-m-d");
    params.updated_at = moment().format("Y-m-d");
    
    const dataInput = []

    params.sendTo.forEach(el => {
      const temp = { ...params } 
      delete temp.sendTo

      temp.forwarded_to = el.id
      dataInput.push(temp)
    })

    const doCreateCallHandling = await model.call_handling.bulkCreate(dataInput)

    // console.log(doCreateCallHandling);

    return {
      status: 200,
      message: "Successfully Create Client.",
      data: doCreateCallHandling
    }

  } catch (err) {
    return {
      status: 500,
      message: err.message,
    }
  }
};

exports._createCallContacts = async (params) => {
  try {
    params.status = 1
    params.created_at =  moment().format("Y-m-d");
    params.updated_at =  moment().format("Y-m-d");

    const doCreate = await model.call_contacts.create(params)

    return {
      status: 200,
      message: "Successfully Create Client.",
      data: doCreate
    }

  } catch (err) {
    return {
      status: 500,
      message: err.message,
    }
  }
};

// exports._getCallContacts = async (companyId) => {

//   const callContacts = await model.call_contacts.findAll({
//     where: {
//       company_id: companyId,
//       status: 1
//     },
//   });

//   if (!callContacts) {
//     return {
//       status: 400,
//       message: `This client doesn't have call contact(s)!`,
//     };
//   }

//   return {
//     status: 200,
//     result: callContacts,
//   };
// };

exports._getCallLog = async (companyId) => {
  try {
    const callLogs = await model.call_handling.findAll({
      where: {
        company_id: companyId
      },
      include: [
        {
          model: model.call_contacts
        },
        {
          model: model.users,
            attributes: ["first_name", "id", "last_name"]
        },
        {
          model: model.companies
        }
      ]
    })

    if (!callLogs) {
      return {
        status: 400,
        message: `Call Logs doesn't exists!`,
      };
    }

    return {
      status: 200,
      result: callLogs,
    }
  } catch (err) {
    return {
      status: 500,
      message: err.message,
    }
  }
}
