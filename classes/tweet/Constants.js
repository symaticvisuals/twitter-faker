const { DataTypes } = require("sequelize");

const name = "tweets";
const InvaildMessage = "Invalid Tweet Id";
const Attributes = {
  id: DataTypes.BIGINT,
  userId: DataTypes.BIGINT,
  tweet: DataTypes.TEXT,
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
  likes: DataTypes.INTEGER,
  retweets: DataTypes.INTEGER,
  content: DataTypes.TEXT,
};

const createAttributes = ["userId", "content"];
const getAttributes = [
  "id",
  "userId",
  "createdAt",
  "updatedAt",
  "likes",
  "retweets",
  "content",
];
const updateAttributes = ["content"];
const fetchTweetsByDateAttributes = ["id", "content", "createdAt", "userId"];

module.exports = {
  name,
  Attributes,
  createAttributes,
  getAttributes,
  updateAttributes,
  InvaildMessage,
  fetchTweetsByDateAttributes,
};
