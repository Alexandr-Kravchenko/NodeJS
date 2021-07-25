import { pl } from './task1';

describe('pluralization test ', () => {
    it('should return correct form for number 12', () => {
        expect(pl(12, 'ведро', 'ведра', 'ведер')).toBe('12 ведер');
    });

    it('should return correct form for number 21', () => {
        expect(pl(21, 'ведро', 'ведра', 'ведер')).toBe('21 ведро');
    });

    it('should return correct form for number 222', () => {
        expect(pl(222, 'ведро', 'ведра', 'ведер')).toBe('222 ведра');
    });

    it('should return correct form for number 221', () => {
        expect(pl(221, 'бубка', 'бубок', 'бубки')).toBe('221 бубка');
    });
});