const User = require("../../controllers/User");
const utils = require("../../utils/utils");

const router = require("express").Router();

router
  .get("/", (req, res) => {
    return utils.sendResponse(req, res, false, {}, "Invalid User Id");
  })
  .get("/:id", (req, res, next) => {
    User.getUser(req, res, next);
  })
  .post("/", (req, res, next) => {
    User.createUser(req, res, next);
  })
  .put("/:id", (req, res, next) => {
    User.updateUser(req, res, next);
  })
  .delete("/:id", (req, res, next) => {
    User.deleteUser(req, res, next);
  });

router.get("/tweets/:id", (req, res, next) => {
  console.log("Here");
  User.fetchTweetsOfUser(req, res, next);
});

module.exports = router;
