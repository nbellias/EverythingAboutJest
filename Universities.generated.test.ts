import Joi from 'joi';
import { University } from './DTOs/University';
import fetchUniversities from './Universities';

jest.mock('./DTOs/University');
jest.mock('./DAL/Universities');

describe('fetchUniversities', () => {
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