import { CountryDto } from "../DTOs/CountryDto";
import { getCountryInfo } from "./CountriesDal";

export class CountriesRepository {
    async getCountryInfo(country: string):Promise<CountryDto[]>{
        return getCountryInfo(country);
    }
}