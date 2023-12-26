import axios from 'axios';
import * as dotenv from 'dotenv';
import { CountryDto } from '../DTOs/CountryDto';

dotenv.config();

export const getCountryInfo = async (country: string):Promise<CountryDto[]> => {
  const countriesApiUrl = `${process.env.COUNTRIES_API_URL}${country}`;
  const response = await axios.get(countriesApiUrl);
  return response.data;
}