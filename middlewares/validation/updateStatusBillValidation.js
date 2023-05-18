const Joi = require('joi');


module.exports = {
  updateStatusBillValidation: (req, res, next) => {
    if (!req.body) {
      return res.status(400).json({ message: "missing field ispaid" });
    }

    const schema = Joi.object({
      ispaid: Joi.boolean().required(),
      dateOfPayment:Joi.date().required(),
    });
    const validationResult = schema.validate(req.body);
    if (validationResult.error) {
      return res.status(400).json({ message: ` ${validationResult.error}` });
    }
    next();
  },
};