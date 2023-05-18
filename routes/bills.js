const express = require('express');

const {
  getBillsController,
  addNewBillController,
  updateStatusBillController,
} = require("../controllers/index");

const { asyncWrapper } = require("../helpers/index");

const {
  updateStatusBillValidation,
  addBillValidation
} = require("../middlewares/index");

const router = express.Router();


router.get('/', asyncWrapper(getBillsController));
router.patch('/:billId/paid', updateStatusBillValidation, asyncWrapper(updateStatusBillController));
router.post('/', addBillValidation, asyncWrapper(addNewBillController));

module.exports = { billsRouter: router };

