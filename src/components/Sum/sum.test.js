// sum.test.js
import { sum } from './sum';

describe('sum function', () => {
    it('should add two numbers correctly', () => {
        expect(sum(1, 2)).toBe(3);
    });

    it('should return 0 if both arguments are 0', () => {
        expect(sum(0, 0)).toBe(0);
    });
});
