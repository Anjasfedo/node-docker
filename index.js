const express = require("express");
const mongoose = require("mongoose");
const {
  MONGO_USER,
  MONGO_PASSWORD,
  MONGO_IP,
  MONGO_PORT,
} = require("./config/config");
const postRouter = require("./routes/postRoute")

const app = express();

const MONGO_URL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`;

const connectWithRetry = () => {
  mongoose
    .connect(MONGO_URL)
    .then(() => console.log("Connected"))
    .catch((e) => {
      console.log(e);
      setTimeout(connectWithRetry, 5000);
    });
};

connectWithRetry();

app.use(express.json())

app.get("/", (req, res) => {
  res.send("<h1>Hi Developsssss</h1>");
});

app.use("/api/v1/posts", postRouter)

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Run on port ${PORT}`));
