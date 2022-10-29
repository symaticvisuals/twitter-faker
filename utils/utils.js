const asyncMiddleware = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

const classResponse = (success = true, data = {}, err = "") => {
  return {
    success,
    data,
    err,
  };
};

const sendResponse = (req, res, success = true, data = {}, err = "") => {
  return res.json({
    success,
    data,
    err,
  });
};

const errorHandler = (err = "", req, res) => {
  return res.json({
    success: false,
    data: {},
    err: err || "Something Went Wrong",
  });
};

/**
 *
 * @param {*} data
 * @returns
 */
const parseSafeData = (data) => {
  return JSON.parse(JSON.stringify(data));
};

module.exports = {
  asyncMiddleware,
  classResponse,
  sendResponse,
  errorHandler,
  parseSafeData,
};
