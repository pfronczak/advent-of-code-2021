const { readFileSync } = require('fs');
const { day2_1, day2_2 } = require('./day2.js');

const example1 = readFileSync('day02/example1.txt', 'utf8').split('\n');
const input = readFileSync('day02/input.txt', 'utf8').split('\n');

describe('Day 2: Dive!', () => {
    describe('Part 1', () => {
        test('example 1', () => {
            expect(day2_1(example1)).toBe(150);
        });
        test('puzzle input', () => {
            expect(day2_1(input)).toBe(2039912);
        });
    })

    describe('Part 2', () => {
        test('example 1', () => {
            expect(day2_2(example1)).toBe(900);
        });
        test('puzzle input', () => {
            expect(day2_2(input)).toBe(1942068080);
        });
    })
});