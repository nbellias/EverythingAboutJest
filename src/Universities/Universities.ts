import { UniversityDto } from '../Shared/DTOs/UniversityDto';
import { getUniversities } from '../Shared/DAL/UniversitiesDal';

export default async function fetchUniversities(country: string): Promise<UniversityDto[]> {
    return await getUniversities(country);
};


fetchUniversities('Greece')
.then((res) => {
    console.log(res);
});
