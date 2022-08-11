const { account, balances } = require("./controllers");

const router = require("express").Router();

router.post("/account", account);
router.post("/balances", balances);

module.exports = router;
