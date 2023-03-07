const jwt = require("jsonwebtoken");

const JWT_KEY = "bhkfdsmklfdmsbhfer";

const createToken = async (data) => {
  const options = {};
  const token = await jwt.sign(data, JWT_KEY, options);
  return token;
};

const verifyToken = async (token) => {
  const verifyOptions = {
    expiresIn: "1h",
  };
  try {
    let authTokenRes = await jwt.verify(token, JWT_KEY, verifyOptions);
    console.log("Token verified = ", authTokenRes);
    return authTokenRes;
  } catch (err) {
    return err;
  }
};

module.exports = { createToken, verifyToken }