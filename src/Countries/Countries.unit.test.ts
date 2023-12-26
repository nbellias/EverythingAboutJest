import fetchCountryInfo from "./Countries";


describe('Countries', () => {
  describe('fetchCountryInfo function', () => {
    it('should expose a function', () => {
      expect(fetchCountryInfo).toBeDefined();
    });

    it('fetchCountryInfo should return something', async () => {
      const retValue = await fetchCountryInfo('greece');
      expect(retValue).toReturn;
    });

    it('fetchCountryInfo should be truthy', async () => {
      const retValue = await fetchCountryInfo('greece');
      expect(retValue).toBeTruthy;
    });
  });

  describe('fetchCountryInfo from mocked Universities', () => {
    jest.mock('axios');
    jest.mock('../Shared/DTOs/CountryDto');
    jest.mock('../Shared/DAL/CountriesDal');
    jest.mock('./Countries');
    test('fetchCountryInfo should return something', async () => {
      const retValue = await fetchCountryInfo('greece');
      expect(retValue).toReturn;
    });

    test('fetchCountryInfo should be truthy', async () => {
      const retValue = await fetchCountryInfo('greece');
      expect(retValue).toBeTruthy;
    });
  });
});

