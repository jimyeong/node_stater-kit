'use strict';

const fs = require('fs');
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};
const User = require("./user");
const Mentor = require("./mentor");


let sequelize = new Sequelize(config.database, config.username, config.password, config);


db.sequelize = sequelize;
User.init(sequelize);
Mentor.init(sequelize);



db.User = User;
db.Mentor = Mentor;

User.associate(db);

module.exports = db;
