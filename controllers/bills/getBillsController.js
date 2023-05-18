const { getListBills } = require("../../service/bills/billsService");


const getBillsController = async (req, res, next) => {
  const { page = 1, limit = 20 } = req.query;

  const bills = await getListBills(page, limit);
  res.status(200).json({ bills });
};

module.exports = { getBillsController };