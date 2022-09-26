const dataPath = "./employee.json";
const fs = require("fs");

const errObject = {
  status: "",
  message: "",
  phase: "",
};

const saveEmployeeData = (data) => {
  try {
    const stringifyData = JSON.stringify(data);
    fs.writeFileSync(dataPath, stringifyData);
  } catch (error) {
    errObject.status = 500;
    errObject.message = "Error in saving data please try again";
    errObject.phase = "Write service phase";
    throw errObject;
  }
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

module.exports = { saveEmployeeData, getEmployeeData };
