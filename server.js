const utils = require("./utils/utils");

const express = require("express");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 8080;
const bodyParser = require("body-parser");
const path = require("path");

app.get("/heartbeat", (req, res) => {
  res.json({ status: 200 });
});

//include static files
app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.json({ limit: "5mb" }));
app.use(bodyParser.urlencoded({ extended: true }));

require(__dirname + "/routes/").forEach(function (route) {
  app.use(route.prefix, route.app);
});

app.use(utils.errorHandler);

app.listen(PORT, () => {
  console.log(`Server is Listening on ${PORT}`);
});
