const capitalize = require('./functions');

test('capitalize function', ()=>{
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('world')).toBe('World');
    expect(capitalize('')).toBe('');
    expect(capitalize('123abc')).toBe('123abc');
});


const reverseString = require('./functions');

test('reverseString function',()=>{
   expect(reverseString('hello')).toBe('olleh'); 
   expect(reverseString('world')).toBe('dlrow');
  expect(reverseString('')).toBe('');
  expect(reverseString('123 abc!')).toBe('!cba 321');
});
const calculator = require('./calculator');

test('calculator object', () => {
  expect(calculator.add(2, 3)).toBe(5);
  expect(calculator.subtract(7, 3)).toBe(4);
  expect(calculator.multiply(4, 5)).toBe(20);
  expect(calculator.divide(10, 2)).toBe(5);
  expect(() => calculator.divide(10, 0)).toThrow('Cannot divide by zero');
});

// caesarCipher.test.js
const caesarCipher = require('./caesarCipher');

test('caesarCipher function', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

// analyzeArray.test.js
const analyzeArray = require('./analyzeArray');

test('analyzeArray function', () => {
  const result = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(result).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  });
});