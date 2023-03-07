const mysql = require("mysql");

const HOST_NAME = "sxb1plzcpnl487428.prod.sxb1.secureserver.net";
const USER = "rahull04";
const PASSWORD = "UnitedKingdom@12345";
const DATABASE = "security_hub";

// const HOST_NAME = "localhost";
// const USER = "root";
// const PASSWORD = "14262312";
// const DATABASE = "security_hub";

const db = mysql.createConnection({
  host: HOST_NAME,
  user: USER,
  password: PASSWORD,
  database: DATABASE,
});

module.exports = db;