const JWT = require("./jwt");
const db = require("../config");

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader == undefined) {
    res.status(401).send({ success: false, msg: "Auth failed" });
  }
  const token = authHeader.split(" ")[1];

  console.log("Auth reached");
  const user = await JWT.verifyToken(token);
  console.log("User", user);
  db.query("SELECT * FROM security_hub.user", async (err, result, fields) => {
    if (err) throw err;
    const verifiedUser = JSON.parse(JSON.stringify(result))[0];
    console.log("verifiedUser", verifiedUser);
    if (
      user.username !== verifiedUser.username ||
      user.password !== verifiedUser.password
    ) {
      res.status(401).send({ success: false, msg: "Auth failed" });
    } else {
      req.user = verifiedUser;
    }
    next();
  });
};