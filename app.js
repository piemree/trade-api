const express = require("express");
const app = express();
require("dotenv").config();
const { port } = require("./config");
const auth = require("./middleware/auth");
const routes = require("./routes");

app.use(express.json());

app.use("/api", auth, routes);

app.get("*", (req, res) => {
  res.send("Not Found");
});
//test
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
