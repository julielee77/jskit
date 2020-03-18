import {formatTime} from '../utils/time';

// time
test('should date format to be 2020-03-17', () => {
    const result = formatTime(new Date('2020-03-17'), 'yyyy-MM-dd');
    console.log(result);
    expect(result).toBe('2020-03-17');
});
test('should date format to be 20-03-18 Q1', () => {
    const result = formatTime('2020-03-18', 'yy-MM-dd Qq');
    console.log(result);
    expect(result).toBe('20-03-18 Q1');
});
test('should date format to be 2020-03-18 周三', () => {
    const result = formatTime('2020-03-18', 'yyyy-MM-dd 周E');
    console.log(result);
    expect(result).toBe('2020-03-18 周三');
});
