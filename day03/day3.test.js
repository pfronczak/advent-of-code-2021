const { readFileSync } = require('fs');
const { day3_1, day3_2 } = require('./day3.js');

const example1 = readFileSync('day03/example1.txt', 'utf8').split('\r\n');
const input = readFileSync('day03/input.txt', 'utf8').split('\r\n');

describe('Day 3: Binary Diagnostic', () => {
    describe('Part 1', () => {
        test('example 1', () => {
            expect(day3_1(example1)).toBe(198);
        });
        test('puzzle input', () => {
            expect(day3_1(input)).toBe(2595824);
        });
    })

    describe('Part 2', () => {
        test('example 1', () => {
            expect(day3_2(example1)).toBe(230);
        });
        test('puzzle input', () => {
            expect(day3_2(input)).toBe(2135254);
        });
    })
});