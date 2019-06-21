const express = require("express");
const router = express.Router();
const getResults= require("../punchScrapper");
const getLeadershipResults = require("../leadershipScrapper");
const getLindaIkejiResults = require("../lindaIkejiScrapper");
const getBusinessDayResults = require("../businessdayScrapper");


/* GET home page. */
router.get("/news/punchng", async function(req, res, next) {
  const result = await getResults(); 
  res.json(result);
});

router.get("/news/leadershipng", async function(req, res, next) {
  const result = await getLeadershipResults();
  res.json(result);
});

router.get("/blog/lindaikejisblog", async function(req, res, next) {
  const result = await getLindaIkejiResults();
  res.json(result);
});

router.get("/news/businessdayng", async function(req, res, next) {
  const result = await getBusinessDayResults();
  console.log(result, 'businessday')
  res.json(result);
});

module.exports = router;