const { Op } = require("sequelize");
const Constants = require("./Constants");
const utils = require("../../utils/utils");
const models = require("../../models");
// fetch all tweets by startdate and enddate
const fetchTweetsByDate = async (startDate, endDate) => {
  console.log(startDate, endDate);
  try {
    const tweets = await models[Constants.name].findAll({
      where: {
        createdAt: {
          [Op.lt]: new Date(
            new Date(endDate).getTime() + 60 * 60 * 24 * 1000 - 1
          ),
          [Op.gt]: new Date(startDate),
        },
      },
      attributes: Constants.fetchTweetsByDateAttributes,
    });
    return utils.classResponse(true, tweets, "");
  } catch (err) {
    console.log(err);
    return utils.classResponse(false, {}, err);
  }
};

module.exports = {
  fetchTweetsByDate,
};
