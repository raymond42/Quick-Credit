import Joi from 'joi';

const validateApproval = {

  validation(user) {
    const userSchema = {
      email: Joi.string().email().required(),
      status: Joi.string().valid('approved', 'rejected').required(),
    };
    return Joi.validate(user, userSchema);
  },

};

export default validateApproval;
