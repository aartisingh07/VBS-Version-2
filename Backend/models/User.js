const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
{
  fullName: { type: String, required: true },
  mobile: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  address: { type: String, required: true },
  aadhaar: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  customerId: { type: String, unique: true },
  balance: { type: Number, default: 0 }
},
{ timestamps: true }
);

module.exports = mongoose.model("User", userSchema);