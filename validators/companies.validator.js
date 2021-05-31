const ValidatorJs = require("validatorjs");

const self = (module.exports = {
  create: (req, res, next) => {
    const rules = {
      new_pic: "required",
      pic: "required",
      company: "required",
    };

    console.log(rules);
    self
      .validate(req.body, rules)
      .then((_) => {
        return next();
      })
      .catch((err) => {
        console.log(err);
        return res.status(400).send(err);
      });
  },

  edit: (req, res, next) => {
    const rules = {
      // client_id: "required",
      company_name: "required",
    };

    self
      .validate(req.body, rules)
      .then((_) => {
        return next();
      })
      .catch((err) => {
        console.log(err);
        return res.status(400).send(err);
      });
  },

  validate: (input, rules) => {
    return new Promise((resolve, reject) => {
      const validation = new ValidatorJs(input, rules);

      if (validation.fails()) {
        return reject(validation.errors.all());
      }

      return resolve(true);
    });
  },
});
