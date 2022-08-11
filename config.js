require("dotenv").config();

module.exports = {
  testApiKey: process.env.TEST_API_KEY,
  testSecret: process.env.TEST_SECRET,
  useTestKeys: process.env.USE_TEST_KEYS === "true",
  apiKey: process.env.API_KEY,
  secret: process.env.API_SECRET,
  port: process.env.PORT || 3000,
};
