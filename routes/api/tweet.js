const Utils = require("../../utils/utils");
const Tweet = require("../../controllers/Tweet");
const router = require("express").Router();

router
  .get("/", (req, res, next) => {
    return Utils.sendResponse(req, res, false, {}, "Invalid User Id");
  })
  .get("/:id", (req, res, next) => {
    Tweet.getTweet(req, res, next);
  })
  .post("/", (req, res, next) => {
    Tweet.createTweet(req, res);
  })
  .put("/:id", (req, res, next) => {
    Tweet.updateTweet(req, res, next);
  })
  .delete("/:id", (req, res, next) => {
    Tweet.deleteTweet(req, res, next);
  });

router.get("/byDate/:startDate/:endDate", (req, res, next) => {
  console.log("Here");
  Tweet.fetchTweetsByDate(req, res, next);
});

module.exports = router;
