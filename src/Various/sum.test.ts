import { describe, expect, test } from '@jest/globals';
import sum from './sum';

describe('sum function', () => {
  describe('sum function being mocked', () => {
    it('adds two random numbers in three attempts', () => {
      // Create a jest mockedSum for the sum function
      const mockedSum = jest.fn().mockReturnValue(3);
      const mockedSum2 = jest.fn().mockImplementation((x, y) => x + y);

      const x = 1;
      const y = 2;

      const expected = x + y;
      const result = mockedSum(x, y);  // Using the mockedSum instead of direct sum function
      const result2 = mockedSum2(x, y);  // Using the mockedSum instead of direct sum function
      console.log(`Test: ${x} + ${y} = ${result}`);
      expect(result).toBe(expected);
      expect(result2).toBe(expected);
      // The following lines work only for mock functions
      expect(mockedSum).toHaveBeenCalledWith(x, y);  // Check if mockedSum (sum) was called with x and y
      expect(mockedSum).toHaveBeenCalledTimes(1);  // Ensure mockedSum was called 1 time
      expect(mockedSum2).toHaveBeenCalledWith(x, y);  // Check if mockedSum (sum) was called with x and y
      expect(mockedSum2).toHaveBeenCalledTimes(1);  // Ensure mockedSum was called 1 time
    });
  });

  describe('sum function being spied', () => {
    it('adds two random numbers in three attempts', () => {
      // Create a jest mockedSum for the sum function
      // jest.fn(sum) indicates that sum is spied so mockedSum is also called a spy function
      const mockedSum = jest.fn(sum);

      for (let i = 0; i < 3; i++) {
        const x = Math.random() * 1000;
        const y = Math.random() * 1000;

        const expected = x + y;
        const result = mockedSum(x, y);  // Using the mockedSum instead of direct sum function
        console.log(`Test ${i}: ${x} + ${y} = ${result}`);
        expect(result).toBe(expected);
        // The following line works only for mock functions
        expect(mockedSum).toHaveBeenCalledWith(x, y);  // Check if mockedSum (sum) was called with x and y
      }

      // The following line works only for mock functions
      expect(mockedSum).toHaveBeenCalledTimes(3);  // Ensure mockedSum was called 100 times
    });
  });

  describe('sum function again without being spied or mocked', () => {

    it('sum should expose a function', () => {
      expect(sum).toBeDefined();
    });

    it('sum should not return null', () => {
      const retValue = sum(1, 2);
      expect(retValue).not.toBeNull;
    });

    it('sum should return something', () => {
      const retValue = sum(1, 2);
      expect(retValue).toReturn;
    });

    it('sum should be truthy', () => {
      const retValue = sum(1, 2);
      expect(retValue).toBeTruthy;
    });

    it('sum should return expected output in three attempts', () => {
      for (let i = 0; i < 3; i++) {
        const x = Math.random() * 1000;
        const y = Math.random() * 1000;

        const expected = x + y;
        const result = sum(x, y);  // Using the spy instead of direct sum function
        console.log(`Test ${i}: ${x} + ${y} = ${result}`);
        expect(result).toBe(expected);
      }
    });
  });
});