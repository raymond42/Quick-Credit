import Joi from 'joi';

const validateTrans = {

  validation(trans) {
    const schema = {
      loanId: Joi.number().required(),
    };
    return Joi.validate(trans, schema);
  },

};

export default validateTrans;
