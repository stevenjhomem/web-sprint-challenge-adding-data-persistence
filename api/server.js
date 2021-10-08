// build your server here and require it from index.js
const express = require("express");

const server = express();

server.use(express.json());

server.use("*", (req, res) => {
    res.json({ api: "is up and running!" });
  });

module.exports = server;