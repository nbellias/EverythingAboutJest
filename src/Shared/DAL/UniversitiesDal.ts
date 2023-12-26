import axios from 'axios';
import * as dotenv from 'dotenv';
import { UniversityDto } from '../DTOs/UniversityDto';

dotenv.config();

export const getUniversities = async (country: string):Promise<UniversityDto[]> => {
  const universitiesApiUrl = `${process.env.UNIVERSITIES_API_URL}?country=${country}`;
  const response = await axios.get(universitiesApiUrl);
  return response.data;
}