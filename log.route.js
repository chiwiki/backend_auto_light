"use strict";

const express = require("express");
const {
  createNewLog,
  getLogs,
  countLogs,
  delAllLogs,
} = require("./log.controller");
const asyncHandler = require("./utils/asyncHandler");
const router = express.Router();

router.post("/logs/create", asyncHandler(createNewLog));
router.get("/logs/list", asyncHandler(getLogs));
router.get("/logs/count", asyncHandler(countLogs));
router.delete("/logs/del", asyncHandler(delAllLogs));

module.exports = router;
