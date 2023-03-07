const express = require("express");
const bodyParser = require("body-parser");
var path = require("path");
const cors = require("cors");

const PORT = 5000;
const app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cors());
app.use(
  express.static(path.join(__dirname.slice(0, __dirname.length - 7), "build"))
);

app.use("/user", require("./src/user"));

app.listen(PORT, console.log("App running on port", PORT));