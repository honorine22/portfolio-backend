const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  database: process.env.API_URL,
  secret: process.env.API_KEY,
  port: process.env.PORT,
};
