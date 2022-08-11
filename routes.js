const { account, balances } = require("./controllers");

const router = require("express").Router();

router.get("/account", account);
router.get("/balances", balances);

module.exports = router;
