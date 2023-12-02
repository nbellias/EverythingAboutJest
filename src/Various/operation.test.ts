import { describe, expect, test } from '@jest/globals';
import Operation from './operation';

describe('operation function', () => {
    const spiedSum = jest.spyOn(Operation.prototype, 'sum');
    const spiedSubstract = jest.spyOn(Operation.prototype, 'substract');
    const spiedMultiply = jest.spyOn(Operation.prototype, 'multiply');
    const spiedDivide = jest.spyOn(Operation.prototype, 'divide');

    afterAll(() => {
        // restore the spy created with spyOn
        jest.restoreAllMocks();
    });

    describe('sum method spied', () => {
        test('should return 3 when 1 and 2 are passed', () => {
            const expected = 3;
            const result = new Operation(1, 2).sum();
            expect(spiedSum).toHaveBeenCalled();
            expect(result).toBe(expected);
        });
    });

    describe('substract method spied', () => {
        test('should return -1 when 1 and 2 are passed', () => {
            const expected = -1;
            const result = new Operation(1, 2).substract();
            expect(spiedSubstract).toHaveBeenCalled();
            expect(result).toBe(expected);
        });
    });

    describe('multiply method spied', () => {
        test('should return 2 when 1 and 2 are passed', () => {
            const expected = 2;
            const result = new Operation(1, 2).multiply();
            expect(spiedMultiply).toHaveBeenCalled();
            expect(result).toBe(expected);
        });
    });

    describe('divide method spied', () => {
        test('should return 0.5 when 1 and 2 are passed', () => {
            const expected = 0.5;
            const result = new Operation(1, 2).divide();
            expect(spiedDivide).toHaveBeenCalled();
            expect(result).toBe(expected);
        });
    });
});
