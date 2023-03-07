const express = require("express");
const router = express.Router();
const userService = require("./service");
const authenticateJWT = require("../services/auth");

router.post("/be-login", userService.login);
router.post("/be-change-password", authenticateJWT, userService.changePassword);

module.exports = router;