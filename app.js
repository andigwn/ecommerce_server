const express = require("express");
const app = express();
const port = 3000;
const hostname = "0.0.0.0";
app.get("/", (req, res) => {
  res.send("Hello Beban Orang Tua");
});
app.listen(port, hostname, () => {
  console.log(`Server running  at http://${hostname}:${port}`);
});
