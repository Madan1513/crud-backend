const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const createError = require("http-errors");
const errorHandler = require("./errorHandler");

// create our express app
const app = express();

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("dev"));

// route
const routes = require("./routes/Routes");
app.use("/", routes);

app.use(function (req, res, next) {
  next(createError(404));
});

app.use(errorHandler);

//start server
app.listen(4001, () => {
  console.log("listeniing at port:4001");
});
