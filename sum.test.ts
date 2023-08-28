import { describe, expect, test } from '@jest/globals';
import sum from './sum';

describe('sum', () => {
  it('calculates sum correctly for 3 random tests', () => {
    const spy = jest.fn(sum);  // Create a jest spy for the sum function

    for (let i = 0; i < 3; i++) {
      const x = Math.random() * 1000;
      const y = Math.random() * 1000;

      const expected = x + y;
      const result = spy(x, y);  // Using the spy instead of direct sum function
      console.log(`Test ${i}: ${x} + ${y} = ${result}`);
      expect(result).toBe(expected);
      expect(spy).toHaveBeenCalledWith(x, y);  // Check if spy (sum) was called with x and y
    }

    expect(spy).toHaveBeenCalledTimes(3);  // Ensure sum was called 100 times
  });
});