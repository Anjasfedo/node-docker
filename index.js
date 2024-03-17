const express = require("express");
const mongoose = require("mongoose");
const {
  MONGO_USER,
  MONGO_PASSWORD,
  MONGO_IP,
  MONGO_PORT,
} = require("./config/config");

const app = express();

const MONGO_URL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`;
mongoose
  .connect(MONGO_URL)
  .then(() => console.log("Connected"))
  .catch((e) => console.log(e));

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("<h1>Hi Developsssss</h1>");
});

app.listen(PORT, () => console.log(`Run on port ${PORT}`));
