const Constants = require("./Constants");
const utils = require("../../utils/utils");
const models = require("../../models");

const fetchUserTweets = async (req) => {
  try {
    const tweets = await models[Constants.relationship].findAll({
      where: {
        userId: req.params.id,
      },
      attributes: Constants.fetchTweetsByDateAttributes,
    });
    return utils.classResponse(true, tweets, "");
  } catch (err) {
    return utils.classResponse(false, {}, err);
  }
};

module.exports = {
  fetchUserTweets,
};
