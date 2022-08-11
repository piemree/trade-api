const ccxt = require("ccxt");

function createClient(req) {
  return new ccxt.binanceusdm({
    apiKey: req.body?.apiKey,
    secret: req.body?.secret,
  });
}

module.exports = { createClient };
