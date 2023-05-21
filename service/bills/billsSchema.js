const mongoose = require("mongoose");


const billsSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: [true, "Choose the company name for the bill"],
    },
    gameName: {
      type: String,
      required: [true, "Choose the name of game for the bill"],
    },
    amount: {
      type: Number,
      required: [true, "Choose the amount for the bill"],
    },
    billNumber: {
      type: String,
      default: '',
    },
    currency: {
      type: String,
      enum: ["dollar", "euro"],
      required: [true, "Choose the currency for the account"],
    },
    ispaid: {
      type: Boolean,
      default: false,
    },
    dateOfPayment: {
      type: Date,
    },
  },
  { timestamps: true, versionKey: false }
);
  
const Bills = mongoose.model("bills", billsSchema);

module.exports = {
  Bills
};