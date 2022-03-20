const Joi = require('joi');

const recordIdParam = Joi.object({
  id: Joi.number().integer().required()
});
const updateLikesPayload = Joi.object({
  like: Joi.boolean().required()
});

module.exports = {
  recordIdParam,
  updateLikesPayload
};
