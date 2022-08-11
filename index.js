const express = require("express");
const app = express();
const helmet = require("helmet");
const { port } = require("./config");

const routes = require("./routes");

app.use(helmet());
app.use(express.json());
app.use("/api", routes);


module.export = app;
