import axios from 'axios';
import * as dotenv from 'dotenv';
import { UniversityDto } from '../DTOs/UniversityDto';

dotenv.config();

export const getUniversities = async (country: string):Promise<UniversityDto[]> => {
  const apiUrl = `${process.env.API_URL}?country=${country}`;
  const response = await axios.get(apiUrl);
  return response.data;
}