const express = require('express');
const router = express.Router();
const tradeControllr = require("./../controllers/trades");

router.post("/", tradeControllr.create);
router.get("/", tradeControllr.findAll);
router.get("/", tradeControllr.findOne);
router.put("/", tradeControllr.UpdateTrade);
router.delete("/", tradeControllr.delete);

module.exports = router;
