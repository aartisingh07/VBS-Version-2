const express = require("express");
const router = express.Router();

const {
  registerUser,
  getUserByCustomerId
} = require("../controllers/userController");

router.post("/register", registerUser);
router.get("/:customerId", getUserByCustomerId);

module.exports = router;