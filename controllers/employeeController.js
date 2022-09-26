const {
  saveEmployeeData,
  getEmployeeData,
} = require("../services/employeeService");

const getEmployee = (req, res, next) => {
  try {
    const employees = getEmployeeData();
    res.send(employees);
  } catch (error) {
    return next(error);
  }
};

module.exports = getEmployee;
