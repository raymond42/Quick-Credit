import Joi from 'joi';

const validateUser = {

  validation(user) {
    const userSchema = {
      email: Joi.string().email().required(),
      status: Joi.string().valid('verified', 'unverified').required(),
    };
    return Joi.validate(user, userSchema);
  },

};

export default validateUser;
