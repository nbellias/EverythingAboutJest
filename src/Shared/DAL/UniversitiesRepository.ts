import { UniversityDto } from "../DTOs/UniversityDto";
import { getUniversities } from "./UniversitiesDal";

export class UniversitiesRepository {
    async getUniversities(country: string):Promise<UniversityDto[]>{
        return getUniversities(country);
    }
}