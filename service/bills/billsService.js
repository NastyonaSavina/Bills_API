const { Bills } = require('./billsSchema');

const getListBills = async (page, limit) => {
  
  const skip = (page - 1) * limit;
  return Bills.find({}).skip(skip).limit(limit).sort({ ispaid: 1 });
};


const addBill = async ({ companyName, gameName, amount, currency }) => {
 
  const numberOfBill= Math.random()*1000000;
 
  return Bills.create({
    companyName,
    gameName,
    amount,
    currency,
    billNumber: Math.ceil(numberOfBill),
  });
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
