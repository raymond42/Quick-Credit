import Joi from 'joi';

const validateMark = {

  validation(newUser) {
    const newUserSchema = {
      status: Joi.string().valid('verified, unverified').required(),
    };
    return Joi.validate(newUser, newUserSchema);
  },

};

export default validateMark;
