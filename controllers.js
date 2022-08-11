const client = require("./client");
const helpers = require("./helpers");

async function account(req, res) {
  try {
    const account = await client.account();
    res.json(account);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
}
async function balances(req, res) {
  try {
    const balance = await client.fetchBalance();
    res.json(balance);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
}

module.exports = { account, balances };
