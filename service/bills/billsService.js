const { Bills } = require('./billsSchema');

const getListBills = async (page, limit) => {
  
  const skip = (page - 1) * limit;
  return Bills.find({}).skip(skip).limit(limit).sort({ ispaid: 1 });
};


const addBill = async (body) => {
  return Bills.create(body);
};


const updateStatusBill = async (billId, body) => {

  return Bills.findByIdAndUpdate({ _id: billId }, body, {
    new: true,
  });
};


module.exports = {
  getListBills,
  addBill,
  updateStatusBill,
};
