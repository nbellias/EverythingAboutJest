import Joi from "joi";

export type UniversityDto = {
    country: string;
    domains: string[];
    alpha_two_code: string;
    'state-province': string | null;
    web_pages: string[];
    name: string;
};

export const UniversityDtoSchema = Joi.object({
    country: Joi.string().required(),
    domains: Joi.array().items(Joi.string()),
    alpha_two_code: Joi.string().required(),
    'state-province': Joi.string().allow(null),
    web_pages: Joi.array().items(Joi.string()),
    name: Joi.string().required()
}).required();
