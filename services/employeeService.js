const dataPath = "./employee.json";
const fs = require("fs");
const { nextTick } = require("process");

const errObject = {
  status: "",
  message: "",
  phase: "",
};

const getEmployeeData = () => {
  try {
    const jsonData = fs.readFileSync(dataPath);
    return JSON.parse(jsonData);
  } catch (error) {
    errObject.status = 500;
    errObject.message = "Error in reading data please try again";
    errObject.phase = "Read service phase";
    throw errObject;
  }
};

module.exports = { getEmployeeData };
