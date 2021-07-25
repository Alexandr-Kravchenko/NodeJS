import { sumOfRange } from "./task2";

describe('it', () => {
    it('sumOfRange should count positive range of numbers correctly', () => {
        expect(sumOfRange(10, 15)).toEqual(75);
    });

    it('sumOfRange should count big positive range of numbers correctly', () => {
        expect(sumOfRange(10, 10000)).toEqual(50004955);
    });

    it('sumOfRange should count negative range of numbers correctly', () => {
        expect(sumOfRange(-5, -1)).toEqual(-15);
    });

    it('sumOfRange should count range of numbers from negative to positive numbers correctly', () => {
        expect(sumOfRange(-5, 5)).toEqual(0);
    });

});