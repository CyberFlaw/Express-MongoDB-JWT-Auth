const config = require("../../../config.json");
const env = require("../../../env.json");

module.exports = {
  env: {
    dbConnect: env.dbConnect,
    privateKey: env.privateKey,
  },
  schemaPath:
    config.schemaPath ||
    "node_modules/@cyberflaw/express-mongodb-jwt/api/Models/User",
  jwt: {
    expiresIn: "24h",
  },
};
