import fetchUniversities from "./Universities";


describe('universities', () => {
  describe('fetchUniversities function', () => {
    it('should expose a function', () => {
      expect(fetchUniversities).toBeDefined();
    });

    it('fetchUniversities should return something', async () => {
      const retValue = await fetchUniversities('Greece');
      expect(retValue).toReturn;
    });

    it('fetchUniversities should be truthy', async () => {
      const retValue = await fetchUniversities('Greece');
      expect(retValue).toBeTruthy;
    });
  });

  describe('fetchUniversities from mocked Universities', async () => {
    jest.mock('../Shared/DTOs/UniversityDto');
    jest.mock('../Shared/DAL/UniversitiesDal');
    jest.mock('./Universities');
    test('fetchUniversities should return something', async () => {
      const retValue = await fetchUniversities('Greece');
      expect(retValue).toReturn;
    });

    test('fetchUniversities should be truthy', async () => {
      const retValue = await fetchUniversities('Greece');
      expect(retValue).toBeTruthy;
    });
  });
});

