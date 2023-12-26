import { getCountryInfo } from "../Shared/DAL/CountriesDal";
import { CountryDto } from "../Shared/DTOs/CountryDto";

export default async function fetchCountryInfo(country: string): Promise<CountryDto[]> {
    return await getCountryInfo(country);
};


fetchCountryInfo('Greece')
.then((res) => {
    // console.log(res);
});
