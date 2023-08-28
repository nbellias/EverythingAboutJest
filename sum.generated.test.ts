import sum from './sum';

describe('sum', () => {
  const a = 1;
  const b = 2;

  it('should expose a function', () => {
		expect(sum).toBeDefined();
	});
  
  it('sum should return expected output', () => {
    const retValue = sum(a,b);
    expect(retValue).toBe(3);
  });
});