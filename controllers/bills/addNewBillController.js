const { addBill } = require("../../service/bills/billsService");


const addNewBillController = async (req, res, next) => {

  const newBill = await addBill(req.body);

  res.status(201).json(newBill);
};

module.exports = { addNewBillController };