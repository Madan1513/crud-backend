const {
  saveEmployeeData,
  getEmployeeData,
} = require("../services/employeeService");

const addEmployee = (req, res, next) => {
  try {
    let existEmployees = getEmployeeData();
    const newEmployeeId =
      parseInt(existEmployees[existEmployees.length - 1].id) + 1;
    let newEmployeeData = req.body;
    newEmployeeData["id"] = newEmployeeId.toString();
    newEmployeeData["isCompleted"] = false;
    console.log(newEmployeeData);
    existEmployees.push(newEmployeeData);
    saveEmployeeData(existEmployees);
    res.send({ success: true, msg: "employee added successfully" });
  } catch (error) {
    return next(error);
  }
};

const getEmployee = (req, res, next) => {
  try {
    const employees = getEmployeeData();
    res.send(employees);
  } catch (error) {
    return next(error);
  }
};

const updateEmployee = (req, res, next) => {
  try {
    let existEmployees = getEmployeeData();
    const employeeId = req.params["id"];
    let objIndex = existEmployees.findIndex((obj) => obj.id == employeeId);
    existEmployees[objIndex] = req.body;
    saveEmployeeData(existEmployees);
    res.send(`employees with id ${employeeId} has been updated`);
  } catch (error) {
    return next(error);
  }
};

const deleteEmployee = (req, res, next) => {
  try {
    let existEmployees = getEmployeeData();
    const employeeId = req.params["id"];
    let objIndex = existEmployees.findIndex((obj) => obj.id == employeeId);
    existEmployees.splice(objIndex, 1);
    saveEmployeeData(existEmployees);
    res.send(`employees with id ${employeeId} has been deleted`);
  } catch (error) {
    return next(error);
  }
};

const getCompletedEmployees = (req, res, next) => {
  try {
    const employees = getEmployeeData();
    let completedEmployees = employees.filter((employee) => {
      return employee.isCompleted === true;
    });
    res.send(completedEmployees);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  addEmployee,
  getEmployee,
  updateEmployee,
  deleteEmployee,
  getCompletedEmployees,
};
