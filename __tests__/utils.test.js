import {formatTime} from '../utils/time';
import {getType, isType, isArrayFamiliar} from '../utils/type';

// time
describe('formatTime function test', () => {
    it('should date format to be 2020-03-17', () => {
        const result = formatTime(new Date('2020-03-17'), 'yyyy-MM-dd');
        expect(result).toBe('2020-03-17');
    });
    it('should date format to be 20-03-18 Q1', () => {
        const result = formatTime('2020-03-18', 'yy-MM-dd Qq');
        expect(result).toBe('20-03-18 Q1');
    });
    it('should date format to be 2020-03-18 周三', () => {
        const result = formatTime('2020-03-18', 'yyyy-MM-dd 周E');
        console.log(result);
        expect(result).toBe('2020-03-18 周三');
    });
});

// type
describe('type related function test', () => {
    it('should getType 2 be Number', () => {
        expect(getType(2)).toBe('Number');
    });
    it('should isType [], array be true', () => {
        expect(isType([], 'array')).toBe(true);
    });
    it('should isArrayFamiliar be true', () => {
        isArrayFamiliar([3, false, '', null], [null, 2, true, 'hello']);
    });
});

