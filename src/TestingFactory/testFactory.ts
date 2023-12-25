// testFactory.ts
import AService from '../Shared/Services/AService';

export function createTestFactory() {
  const mockUniversitiesRepository = {
    getUniversities: jest.fn(),
    // ... other methods
  };

  const service = new AService(mockUniversitiesRepository);

  return { service, mockUniversitiesRepository };
}
