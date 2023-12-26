import { CountriesRepository } from "../DAL/CountriesRepository";
import { UniversitiesRepository } from "../DAL/UniversitiesRepository";

export default class AService {
  constructor(
    private universitiesRepository: UniversitiesRepository,
    private countriesRepository: CountriesRepository
  ) {}

  fetchInfoAboutGreece(){
    return this.countriesRepository.getCountryInfo('greece');
  }

  fetchGreekUnivesritiesMethod() {
    return this.universitiesRepository.getUniversities("Greece");
  }

  dateNow(): number {
    return Date.now();
  }
}
