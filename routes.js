const { account, balances } = require("./controllers");

const router = require("express").Router();

router.post("/account", account);
router.post("/balances", balances);
router.get("/", (req, res) => {
  res.send("Hello World2");
});
router.post("/", (req, res) => {
  res.send(req.body);
});

module.exports = router;
