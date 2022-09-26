const express = require("express");
const router = express.Router();
const fs = require("fs");
const employeeRoutes = require("./employee");
router.use(employeeRoutes);

module.exports = router;
