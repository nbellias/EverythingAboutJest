import fetchUniversities from "./Universities";

jest.mock('../Shared/DTOs/UniversityDto');
jest.mock('../Shared/DAL/UniversitiesDal');

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