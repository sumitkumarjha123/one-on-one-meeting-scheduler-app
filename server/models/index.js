require('dotenv').config()
const PG_URL=process.env.PG_URL
const Sequelize = require("Sequelize");

//const PG_URL = "postgres://ukdlfwca:p1kBiW9q-d_vksow3JbUQF8RKTGmKVq-@fanny.db.elephantsql.com/ukdlfwca";

const sequelize = new Sequelize(PG_URL, {
  dialect: "postgres"
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Employees = require("./Employees.js")(sequelize, Sequelize);

module.exports = db;