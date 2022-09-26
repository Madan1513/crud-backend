const errorHandler = (error, req, res, next) => {
  if (error && !error.status) error.status = 400;
  return res
    .status(error.status || 400)
    .json({ status: "error", message: error.message || error });
};
module.exports = errorHandler;
