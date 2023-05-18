const { getBillsController } = require("./bills/getBillsController");

const { addNewBillController } = require("./bills/addNewBillController");


const {
  updateStatusBillController
} = require("./bills/updateStatusBillController");

module.exports = {
  getBillsController,
  addNewBillController,
  updateStatusBillController,
};
