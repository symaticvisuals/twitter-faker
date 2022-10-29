const utils = require("../../utils/utils");
const Constants = require("./Constants");
const models = require("../../models");
const _ = require("lodash");
const create = async (req) => {
  try {
    const user = await models[Constants.name].create(
      // picking attributes from the request body defined in Constants.createAttributes
      _.pick(req.body, Constants.createAttributes)
    );
    return utils.classResponse(true, user, "");
  } catch (err) {
    return utils.classResponse(false, {}, err);
  }
};

const get = async (req) => {
  try {
    const user = await models[Constants.name].findOne({
      where: {
        id: req.params.id,
      },
      attributes: Constants.getAttributes,
    });
    return utils.classResponse(true, user, "");
  } catch (err) {
    return utils.classResponse(false, {}, err);
  }
};

const update = async (req) => {
  try {
    const user = await models[Constants.name].update(
      // picking attributes from the request body defined in Constants.createAttributes
      _.pick(req.body, Constants.updateAttributes),
      {
        where: {
          id: req.params.id,
        },
      }
    );
    return utils.classResponse(true, user, "");
  } catch (err) {
    return utils.classResponse(false, {}, err);
  }
};

const destroy = async (req) => {
  try {
    const user = await models[Constants.name].destroy({
      where: {
        id: req.params.id,
      },
    });
    return utils.classResponse(true, user, "");
  } catch (err) {
    return utils.classResponse(false, {}, err);
  }
};

module.exports = { create, get, update, destroy };
