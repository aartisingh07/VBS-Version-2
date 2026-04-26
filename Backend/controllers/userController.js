const User = require("../models/User");
const bcrypt = require("bcryptjs");

const generateCustomerId = () => {
  return "VBS" + Math.floor(100000 + Math.random() * 900000);
};

exports.registerUser = async (req, res) => {
  try {
    const { fullName, mobile, email, address, aadhaar, password } = req.body;

    const existingUser = await User.findOne({
      $or: [{ email }, { mobile }, { aadhaar }]
    });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists"
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const customerId = generateCustomerId();

    const user = await User.create({
      fullName,
      mobile,
      email,
      address,
      aadhaar,
      password: hashedPassword,
      customerId
    });

    res.status(201).json({
      message: "Account created successfully",
      customerId: user.customerId,
      fullName: user.fullName
    });

  } catch (error) {
    res.status(500).json({
      message: "Server Error"
    });
  }
};

exports.getUserByCustomerId = async (req, res) => {
  try {
    const user = await User.findOne({
      customerId: req.params.customerId
    });

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    res.status(200).json({
      fullName: user.fullName,
      customerId: user.customerId,
      balance: user.balance
    });

  } catch (error) {
    res.status(500).json({
      message: "Server Error"
    });
  }
};