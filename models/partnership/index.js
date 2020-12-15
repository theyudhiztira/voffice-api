const config = require("../../config/config.json");
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const fs = require('fs');
const db = {};

let sequelize;
sequelize = new Sequelize(config.vox_live.database, config.vox_live.username, config.vox_live.password, config.vox_live);

fs
    .readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
        const model = require(`./${file}`)(sequelize, Sequelize.DataTypes);
        db[model.name] = model;
    });

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;