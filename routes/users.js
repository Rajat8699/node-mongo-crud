const express = require("express");
const router = express.Router();

const { loginController, signupController } = require("../controllers/usersController");

router.post("/signin", loginController)
router.post("/signup", signupController)

module.exports = router;
