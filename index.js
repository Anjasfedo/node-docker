const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hi worldssssss</h1>");
});

app.listen(PORT, () => console.log(`Run on port ${PORT}`));
