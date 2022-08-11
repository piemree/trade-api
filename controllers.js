const { createClient } = require("./helpers");

async function account(req, res) {
  const client = createClient(req);
  try {
    const account = await client.account();
    res.json(account);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
}
async function balances(req, res) {
  const client = createClient(req);
  try {
    const balance = await client.fetchBalance();
    res.json(balance);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
}

module.exports = { account, balances };
