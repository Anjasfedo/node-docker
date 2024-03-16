const express = require("express");

const app = express();

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("<h1>Hi Develop</h1>");
});

app.listen(PORT, () => console.log(`Run on port ${PORT}`));
