const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../configurations/varEnv");

const generateToken = (userId) => {
  return jwt.sign({ id: userId }, JWT_SECRET, { expiresIn: "7d" });
};

module.exports = generateToken;
