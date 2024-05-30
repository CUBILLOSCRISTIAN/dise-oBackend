const express = require("express");
const router = express.Router();
const logerController = require("./loger.controller");

async function GetLog(req, res) {
  try {
    const logs = await logerController.GetLog();
    res.status(200).json(logs);
  } catch (e) {
    throw e;
  }
}

async function CreateLog(req, res) {
  try {
    const data = {
      ...req.body,
    };
    const log = await logerController.CreateLog(data);
    res.status(201).json(log);
  } catch (e) {
    throw e;
  }
}

router.get("/", GetLog);
router.post("/", CreateLog);

module.exports = router;
