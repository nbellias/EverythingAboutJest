import Joi from "joi";

export type University = {};

export const University = Joi.object({
    country: Joi.string().required(),
    domains: Joi.array().items(Joi.string()),
    alpha_two_code: Joi.string().required(),
    'state-province': Joi.string().allow(null),
    web_pages: Joi.array().items(Joi.string()),
    name: Joi.string().required()
}).required();
