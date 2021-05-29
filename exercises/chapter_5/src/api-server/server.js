/*! Copyright Globant. All rights reserved. */
"use strict";

// This will be our application entry. We'll setup our server here.
const http = require("http");
const app = require("./core/app"); // The express app we just created
const config = require("./core/config");

app.set("port", config.port);

const server = http.createServer(app);

server.listen(config.port, function () {
  console.info(`start: ${new Date()}`);
  console.info(line + "\n");
});
