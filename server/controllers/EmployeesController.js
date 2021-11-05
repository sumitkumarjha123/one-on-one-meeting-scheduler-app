const express = require("express");
const db = require("../models");

const employeeRouter = express.Router();

employeeRouter.get("/", async (req, res) => {
  const { Employees } = db;

  const employees = await Employees.findAll({
    
  });
  return res.json({employees})

})


module.exports = employeeRouter