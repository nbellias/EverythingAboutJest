import { University } from './DTOs/University';
import { getUniversities } from './DAL/Universities';

process.env = {
    ...process.env
  };

export default async function fetchUniversities(country: string): Promise<University[]> {
    return await getUniversities(country);
};


// fetchUniversities('Greece')
// .then((res) => {
//     console.log(res);
// });

console.log(process.env);