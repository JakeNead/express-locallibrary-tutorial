const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});
router.get("/cool/", function (req, res, next) {
  res.send("You're so cool you get to route to your own page!");
});

module.exports = router;
