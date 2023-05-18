const Joi = require('joi');


module.exports = {
    addBillValidation: (req, res, next) => {
        
    const schema = Joi.object({
        companyName: Joi.string().min(3).max(30).required(),
        gameName: Joi.string().min(3).required(),
        amount: Joi.number().greater(5).required(),
        currency: Joi.string(),
    });
        
    const validationResult = schema.validate(req.body);
    if (validationResult.error) {
      return res.status(400).json({ message: ` ${validationResult.error}` });
    }
    next();
  },
};