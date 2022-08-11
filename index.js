// const express = require("express");
// const app = express();
// const helmet = require("helmet");
// const { port } = require("./config");

// const routes = require("./routes");

// app.use(helmet());
// app.use(express.json());
// app.use("/api", routes);

// module.export = app;

const app = require("express")();

const PORT = process.env.PORT || 5000;

app.get("/api", (req, res) => {
  res.send("Hello World");
});
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
})
