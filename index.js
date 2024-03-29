const express = require("express");
const {
  MONGO_USER,
  MONGO_PASSWORD,
  MONGO_IP,
  MONGO_PORT,
  REDIS_IP,
  REDIS_PORT,
  SESSION_SECRET,
} = require("./config/config");
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");
const redis = require("redis");
const RedisStore = require("connect-redis").default;

const REDIS_URL = `redis://:@${REDIS_IP}:${parseInt(REDIS_PORT)}`;
const redisClient = redis.createClient({
  url: REDIS_URL,
});
redisClient.connect().catch(console.error);

const postRouter = require("./routes/postRoute");
const userRouter = require("./routes/userRoute");

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

app.enable("trust proxy");

app.use(cors({}));

app.use(
  session({
    store: new RedisStore({ client: redisClient }),
    secret: SESSION_SECRET,
    cookie: {
      secure: false,
      resave: false,
      saveUninitialized: false,
      httpOnly: true,
      maxAge: 30000,
    },
  })
);

app.use(express.json());

app.get("/api/v1", (req, res) => {
  res.send("<h1>Hi Developer!!!!!!!</h1>");
});

app.use("/api/v1/posts", postRouter);
app.use("/api/v1/users", userRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Run on port ${PORT}`));
