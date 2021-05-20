"use strict";
const fs = require("fs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    const data = JSON.parse(
      fs.readFileSync("./seeders/json/timezones.json", "utf8")
    );

    console.log(data);
    data.forEach((el) => {
      el.createdAt = new Date();
      el.updatedAt = new Date();
    });

    return queryInterface.bulkInsert("timezones", data, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("timezones", null, {});
  },
};
