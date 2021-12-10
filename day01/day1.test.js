const { readFileSync } = require('fs');
const { day1_1, day1_2 } = require('./day1.js');

const example1 = readFileSync('day01/example1.txt', 'utf8').split('\n').map(Number);
const input = readFileSync('day01/input.txt', 'utf8').split('\n').map(Number);

describe('Day 1: Sonar Sweep', () => {
    test('Part 1, example 1', () => {
        expect(day1_1(example1)).toBe(7);
    });
    test('Part 1, puzzle input', () => {
        expect(day1_1(input)).toBe(1393);
    });

    test('Part 2, example 1', () => {
        expect(day1_2(example1)).toBe(5);
    });
    test('Part 1, puzzle input', () => {
        expect(day1_2(input)).toBe(1359);
    });
});