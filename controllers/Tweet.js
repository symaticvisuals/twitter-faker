const Tweet = require("../classes/tweet/Tweet");
const Functions = require("../classes/tweet/Functions");
const utils = require("../utils/utils");
const Constants = require("../classes/tweet/Constants");
const createTweet = async (req, res, next) => {
  try {
    const tweet = await Tweet.create(req);
    return utils.sendResponse(req, res, tweet.success, tweet.data, tweet.err);
  } catch (err) {
    next(err);
  }
};

const getTweet = async (req, res, next) => {
  if (!req.params.id) {
    return utils.sendResponse(req, res, false, {}, Constants.InvaildMessage);
  }
  try {
    const tweet = await Tweet.get(req, next);
    return utils.sendResponse(req, res, tweet.success, tweet.data, tweet.err);
  } catch (err) {
    next(err);
  }
};

const updateTweet = async (req, res, next) => {
  if (!req.params.id) {
    return utils.sendResponse(req, res, false, {}, Constants.InvaildMessage);
  }
  try {
    const tweet = await Tweet.update(req, next);
    return utils.sendResponse(req, res, tweet.success, tweet.data, tweet.err);
  } catch (err) {
    next(err);
  }
};

const deleteTweet = async (req, res, next) => {
  if (!req.params.id) {
    return utils.sendResponse(req, res, false, {}, Constants.InvaildMessage);
  }
  try {
    const tweet = await Tweet.destroy(req, next);
    return utils.sendResponse(req, res, tweet.success, tweet.data, tweet.err);
  } catch (err) {
    next(err);
  }
};

const fetchTweetsByDate = async (req, res, next) => {
  
  try {
    const tweets = await Functions.fetchTweetsByDate(
      req.params.startDate,
      req.params.endDate
    );
    return utils.sendResponse(
      req,
      res,
      tweets.success,
      tweets.data,
      tweets.err
    );
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createTweet,
  getTweet,
  updateTweet,
  deleteTweet,
  fetchTweetsByDate,
};
