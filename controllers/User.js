const User = require("../classes/user/User");
const utils = require("../utils/utils");
const Constants = require("../classes/user/Constants");
const Functions = require("../classes/user/Functions");
const createUser = async (req, res, next) => {
  try {
    const user = await User.create(req);
    return utils.sendResponse(req, res, user.success, user.data, user.err);
  } catch (err) {
    next(err);
  }
};

const getUser = async (req, res, next) => {
  if (!req.params.id) {
    return utils.sendResponse(req, res, false, {}, Constants.InvaildMessage);
  }
  try {
    const user = await User.get(req, next);
    return utils.sendResponse(req, res, user.success, user.data, user.err);
  } catch (err) {
    next(err);
  }
};

const updateUser = async (req, res, next) => {
  if (!req.params.id) {
    return utils.sendResponse(req, res, false, {}, Constants.InvaildMessage);
  }
  try {
    const user = await User.update(req, next);
    return utils.sendResponse(req, res, user.success, user.data, user.err);
  } catch (err) {
    next(err);
  }
};

const deleteUser = async (req, res, next) => {
  if (!req.params.id) {
    return utils.sendResponse(req, res, false, {}, Constants.InvaildMessage);
  }
  try {
    const user = await User.destroy(req, next);
    return utils.sendResponse(req, res, user.success, user.data, user.err);
  } catch (err) {
    next(err);
  }
};

const fetchTweetsOfUser = async (req, res, next) => {
  console.log("fetchTweetsOfUser");
  if (!req.params.id) {
    return utils.sendResponse(req, res, false, {}, Constants.InvaildMessage);
  }
  try {
    const user = await Functions.fetchUserTweets(req, next);
    return utils.sendResponse(req, res, user.success, user.data, user.err);
  } catch (err) {
    // next(req,res,err);
  }
};

module.exports = {
  createUser,
  getUser,
  updateUser,
  deleteUser,
  fetchTweetsOfUser,
};
