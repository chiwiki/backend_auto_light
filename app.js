const express = require("express");
const morgan = require("morgan");
const app = express();
const helmet = require("helmet");
const cors = require("cors");

require("dotenv").config();
//init middleware

const server = require("http").createServer(app);

app.use(express.json());
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());
app.use(morgan("dev"));
app.use(helmet());

//init db
require("./dbs/init.mongo");

//init routes
app.use("/api/v1", require("./log.route"));

//handling error
// app.use((req, res, next) => {
//   const error = new NotFoundError();
//   next(error);
// });

app.use((error, req, res, next) => {
  const statusCode = error.statusCode ? error.statusCode : 500;
  return res.status(statusCode).json({
    message: error.message ? error.message : "Internal error",
    statusCode: statusCode,
  });
});

module.exports = server;
