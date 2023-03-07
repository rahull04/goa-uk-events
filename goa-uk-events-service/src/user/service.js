const db = require("../../config");
const JWT = require("../services/jwt");

const login = async (req, res) => {
  console.log("Hit Login api");
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      res.send({
        success: false,
      });
    }

    db.query("SELECT * FROM security_hub.user", async (err, result, fields) => {
      if (err) throw err;
      const data = JSON.parse(JSON.stringify(result))[0];
      const dbUsername = data.username,
        dbPassword = data.password;
      if (username === dbUsername && password === dbPassword) {
        console.log("Valid login");
        let token = await JWT.createToken({ username, password });
        return res.send({
          success: true,
          token,
        });
      } else {
        console.log("Invalid login", dbUsername, dbPassword);
        return res.send({
          success: false,
        });
      }
    });
  } catch (e) {
    res.send({
      success: false,
      error: e,
    });
  }
};

const changePassword = async (req, res) => {
  console.log("Hit change-password api");
  try {
    const { newPassword } = req.body;
    const userId = req.user.id;

    if (!newPassword) {
      res.send({
        success: false,
      });
    }

    const sql = `UPDATE security_hub.user SET password = '${newPassword}' WHERE id = ${userId}`;
    db.query(sql, async (err, result, fields) => {
      if (err) throw err;
      let token = await JWT.createToken({
        username: req.user.username,
        password: newPassword,
      });
      return res.send({
        success: true,
        token,
      });
    });
  } catch (e) {
    console.log(e);
    res.send({
      success: false,
      error: e,
    });
  }
};

module.exports = {
  login,
  changePassword,
};