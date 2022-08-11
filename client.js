const ccxt = require("ccxt");
const {
  useTestKeys,
  testApiKey,
  testSecret,
  apiKey,
  secret,
} = require("./config");

const exchange = new ccxt.binanceusdm({
  apiKey: useTestKeys ? testApiKey : apiKey,
  secret: useTestKeys ? testSecret : secret,
});
exchange.setSandboxMode(useTestKeys);

module.exports = exchange;
