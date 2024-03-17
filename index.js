const express = require("express");
const mongoose = require("mongoose");

const app = express();
mongoose
  .connect("mongodb://root:example@mongo:27017/?authSource=admin")
  .then(() => console.log("Connected"))
  .catch((e) => console.log(e));

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("<h1>Hi Developsssss</h1>");
});

app.listen(PORT, () => console.log(`Run on port ${PORT}`));
