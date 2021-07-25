import {factorial} from './task3';

describe('factorial ', () => {
    it('should return correct factorial', () => {
        expect(factorial(15)).toBe(1307674368000)
    });
    it('should return correct factorial', () => {
        expect(factorial(100)).toBe(9.332621544394418e+157)
    });
});