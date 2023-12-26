import Joi from "joi";

type Name = {
  common: string;
  official: string;
  nativeName?: {
    [key: string]: {
      official: string;
      common: string;
    };
  };
};

type Currency = {
  name: string;
  symbol: string;
};

type Language = {
  [key: string]: string;
};

type Translation = {
  official: string;
  common: string;
};

type Demonym = {
  f: string;
  m: string;
};

type Flag = {
  png: string;
  svg: string;
  alt?: string;
};

type CountryDto = {
  name: Name;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: { [key: string]: Currency };
  idd: {
    root: string;
    suffixes: string[];
  };
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: Language;
  translations: { [key: string]: Translation };
  latlng: number[];
  landlocked: boolean;
  borders: string[];
  area: number;
  demonyms: { [key: string]: Demonym };
  flag: string;
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
  population: number;
  gini: { [key: string]: number };
  fifa: string;
  car: {
    signs: string[];
    side: string;
  };
  timezones: string[];
  continents: string[];
  flags: Flag;
  coatOfArms: Flag;
  startOfWeek: string;
  capitalInfo: {
    latlng: number[];
  };
  postalCode: {
    format: string;
    regex: string;
  };
};

const nameSchema = Joi.object({
  common: Joi.string().required(),
  official: Joi.string().required(),
  nativeName: Joi.object().pattern(
    Joi.string(),
    Joi.object({
      official: Joi.string().required(),
      common: Joi.string().required(),
    })
  ),
});

const currencySchema = Joi.object({
  name: Joi.string().required(),
  symbol: Joi.string().required(),
});

const languageSchema = Joi.object().pattern(Joi.string(), Joi.string());

const translationSchema = Joi.object({
  official: Joi.string().required(),
  common: Joi.string().required(),
});

const demonymSchema = Joi.object({
  f: Joi.string().required(),
  m: Joi.string().required(),
});

const flagSchema = Joi.object({
  png: Joi.string().uri().required(),
  svg: Joi.string().uri().required(),
  alt: Joi.string(),
});

const countryDtoSchema = Joi.object({
  name: nameSchema.required(),
  tld: Joi.array().items(Joi.string()).required(),
  cca2: Joi.string().required(),
  ccn3: Joi.string().required(),
  cca3: Joi.string().required(),
  cioc: Joi.string().required(),
  independent: Joi.boolean().required(),
  status: Joi.string().required(),
  unMember: Joi.boolean().required(),
  currencies: Joi.object().pattern(Joi.string(), currencySchema).required(),
  idd: Joi.object({
    root: Joi.string().required(),
    suffixes: Joi.array().items(Joi.string()).required(),
  }).required(),
  capital: Joi.array().items(Joi.string()).required(),
  altSpellings: Joi.array().items(Joi.string()).required(),
  region: Joi.string().required(),
  subregion: Joi.string().required(),
  languages: languageSchema.required(),
  translations: Joi.object()
    .pattern(Joi.string(), translationSchema)
    .required(),
  latlng: Joi.array().items(Joi.number()).length(2).required(),
  landlocked: Joi.boolean().required(),
  borders: Joi.array().items(Joi.string()).required(),
  area: Joi.number().required(),
  demonyms: Joi.object().pattern(Joi.string(), demonymSchema).required(),
  flag: Joi.string().required(),
  maps: Joi.object({
    googleMaps: Joi.string().uri().required(),
    openStreetMaps: Joi.string().uri().required(),
  }).required(),
  population: Joi.number().required(),
  gini: Joi.object().pattern(Joi.string(), Joi.number()).required(),
  fifa: Joi.string().required(),
  car: Joi.object({
    signs: Joi.array().items(Joi.string()).required(),
    side: Joi.string().required(),
  }).required(),
  timezones: Joi.array().items(Joi.string()).required(),
  continents: Joi.array().items(Joi.string()).required(),
  flags: flagSchema.required(),
  coatOfArms: flagSchema.required(),
  startOfWeek: Joi.string().required(),
  capitalInfo: Joi.object({
    latlng: Joi.array().items(Joi.number()).length(2).required(),
  }).required(),
  postalCode: Joi.object({
    format: Joi.string().required(),
    regex: Joi.string().required(),
  }).required(),
});

export { CountryDto, countryDtoSchema };
