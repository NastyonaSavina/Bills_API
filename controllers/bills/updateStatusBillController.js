const { updateStatusBill } = require("../../service/bills/billsService");

const updateStatusBillController = async (req, res, next) => {

const updatedStatusById = await updateStatusBill(req.params.billId, req.body);
    

  if (!updatedStatusById) {
    res.status(404).json({
      message: `Bill with id ${req.params.billId} wasn't  found`,
    });
  }
  res.status(200).json(updatedStatusById);
};

module.exports = { updateStatusBillController };