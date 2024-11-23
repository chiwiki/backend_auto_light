const Log = require("./models/log");

const createNewLog = async (req, res, next) => {
  const newLog = await Log.create(req.body);
  res.status(201).json({
    success: true,
    messsage: "create success",
    data: newLog,
  });
};

const getLogs = async (req, res, next) => {
  const { skip = 0 } = req.query;
  const maxLimit = 10;
  const logs = await Log.find()
    .skip(skip)
    .limit(maxLimit)
    .sort({ createdAt: -1 })
    .lean();
  res.status(200).json({
    success: true,
    messsage: "get logs success",
    data: logs,
  });
};
const countLogs = async (req, res, next) => {
  const count = await Log.countDocuments();
  res.status(200).json({
    success: true,
    messsage: "count logs success",
    data: count,
  });
};

const delAllLogs = async (req, res, next) => {
  const del = await Log.deleteMany();
  console.log("DEL::", del);
  res.status(200).json({
    success: true,
    messsage: "delete logs success",
    data: [],
  });
};
module.exports = {
  createNewLog,
  getLogs,
  countLogs,
  delAllLogs,
};
