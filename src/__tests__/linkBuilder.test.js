import { linkBuilder } from '../services/linkBuilder';

test('https://linkedin.com should return same value', () => {
    const link = 'https://linkedin.com';
    const result = linkBuilder(link);
    expect(result).toBe('https://linkedin.com');
})

test('www.linkedin.com should return https://www.linkedin.com', () => {
    const link = 'www.linkedin.com';
    const result = linkBuilder(link);
    expect(result).toBe('https://www.linkedin.com');
})

test('linkedin.com should return https://linkedin.com', () => {
    const link = 'linkedin.com';
    const result = linkBuilder(link);
    expect(result).toBe('https://linkedin.com');
})

test('`` should return https://google.com', () => {
    const result = linkBuilder('');
    expect(result).toBe('https://google.com');
})