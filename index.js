"use strict";

const server = require("./app");

server.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
