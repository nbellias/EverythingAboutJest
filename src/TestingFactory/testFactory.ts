// testFactory.ts
import AService from '../Shared/Services/AService';

export function createTestFactory() {
  const mockUniversitiesRepository = {
    getUniversities: jest.fn(),
  };

  const mockCountriesRepository = {
    getCountryInfo: jest.fn(),
  }

  const mockDateNow = {
    dateNow: jest.fn(),
  }

  const service = new AService(mockUniversitiesRepository, mockCountriesRepository);

  return { service, mockUniversitiesRepository, mockCountriesRepository };
}
