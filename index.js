const express = require("express");
const app = express();

// const routes = require("./routes");

// app.use(helmet());
// app.use(express.json());
// app.use("/api", routes);


app.get("/", (req, res) => {
    res.send("Hello World");
  });

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
})
