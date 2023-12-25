import { createTestFactory } from '../../TestingFactory/testFactory';

describe('UserService', () => {
  it('should fetch Greek universities', async () => {
    const { service: AService, mockUniversitiesRepository } = createTestFactory();

    const mockCountry = 'Greece';
    
    mockUniversitiesRepository.getUniversities.mockResolvedValue(grUniversities);
    const grUnivs = await AService.aMethod();

    expect(mockUniversitiesRepository.getUniversities).toHaveBeenCalledWith(mockCountry);
    expect(grUnivs).toEqual(grUniversities);
  });

  // ... more tests
});


const grUniversities = [
  {
    name: 'American College of Greece',
    country: 'Greece',
    alpha_two_code: 'GR',
    domains: [ 'acg.gr' ],
    web_pages: [ 'http://www.acg.gr/' ],
    'state-province': null
  },
  {
    name: 'American College of Thessaloniki',
    country: 'Greece',
    alpha_two_code: 'GR',
    domains: [ 'act.edu' ],
    web_pages: [ 'http://www.act.edu/' ],
    'state-province': null
  },
]