import Joi from 'joi';

const validateLoans = {

  validation(newLoan) {
    const newLoanSchema = {
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      email: Joi.string().email().required(),
      tenor: Joi.string().required(),
      amount: Joi.number().required(),
      paymentInstallment: Joi.number().required(),
      balance: Joi.number().required(),
      interest: Joi.number().required(),
    };
    return Joi.validate(newLoan, newLoanSchema);
  },

};

export default validateLoans;
