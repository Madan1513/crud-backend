const express = require("express");
const employeeRoutes = express.Router();
const { getEmployee } = require("../controllers/employeeController");

employeeRoutes.get("/employee/list", getEmployee);

module.exports = employeeRoutes;
