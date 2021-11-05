const express = require("express");
const morgan = require("morgan");
const cors=require('cors');
const EmployeeController = require("./controllers/EmployeesController")

const server = express();
server.use(cors())
server.use(morgan("dev")); // middleware
server.use(express.json()); // parse json in req.body

server.get("/", (req,res, next) => { // Health check API
  return res.send("Server is running.");
});

server.use('/employees', EmployeeController)

server.listen(9000);