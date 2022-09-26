const express = require("express");
const employeeRoutes = express.Router();
const {
  addEmployee,
  getEmployee,
  updateEmployee,
  deleteEmployee,
  getCompletedEmployees
} = require("../controllers/employeeController");

employeeRoutes.post("/employee/addemployee", addEmployee);

employeeRoutes.get("/employee/list", getEmployee);

employeeRoutes.put("/employee/:id", updateEmployee);

employeeRoutes.delete("/employee/delete/:id", deleteEmployee);

employeeRoutes.get("/employee/isCompleted", getCompletedEmployees)

module.exports = employeeRoutes;
