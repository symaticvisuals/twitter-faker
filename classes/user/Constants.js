const { DataTypes } = require("sequelize");

const name = "users";
const relationship = "tweets";

const InvaildMessage = "Invalid User Id";
const Attributes = {
  id: DataTypes.BIGINT,
  name: DataTypes.STRING,
  bio: DataTypes.TEXT,
  dob: DataTypes.DATEONLY,
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
};

const createAttributes = ["name", "bio", "dob"];
const getAttributes = ["id", "name", "bio", "dob", "createdAt", "updatedAt"];
const updateAttributes = ["name", "bio", "dob"];
const fetchTweetsByDateAttributes = ["id", "content", "createdAt"];
module.exports = {
  name,
  Attributes,
  createAttributes,
  getAttributes,
  updateAttributes,
  InvaildMessage,
  fetchTweetsByDateAttributes,
  relationship
};
