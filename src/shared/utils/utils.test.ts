import {addUrlParams, convertHttpToHttpsString, convertStringToRoundedNumber, makeRusPluralization} from './utils';
import { convertDateToRusLocale } from './utils';
import { convertDateTimeToRusLocale } from './utils';
import { formatIntegerToRusLocale } from './utils';

describe('addUrlParams', () => {
  test('should add query parameters to a URL', () => {
    const url = 'https://example.com';
    const queryParams = {
      param1: 'value1',
      param2: 'value2',
    };

    const result = addUrlParams(url, queryParams);

    // Check if the result includes the query parameters
    expect(result).toContain('param1=value1');
    expect(result).toContain('param2=value2');
  });

  test('should handle empty query parameters', () => {
    const url = 'https://example.com';
    const queryParams = {};

    const result = addUrlParams(url, queryParams);

    // Check if the result is the same as the original URL
    expect(result).toBe(`${url}?`);
  });
});

describe('convertDateToRusLocale', () => {
  test('should convert a date to Russian locale format', () => {
    // Input date in a known format (e.g., '2023-09-30')
    const inputDate = '2023-09-30';

    // Expected output in Russian locale format
    const expectedOutput = '30 сент. 2023 г.';

    // Call the function with the input date
    const result = convertDateToRusLocale(inputDate);

    // Check if the result matches the expected output
    expect(result).toBe(expectedOutput);
  });

  // Add more test cases as needed
});

describe('convertDateTimeToRusLocale', () => {
  test('should convert a date and time to Russian locale format', () => {
    // Input date and time in a known format (e.g., '1918-Sep-17 15:25')
    const inputDateTime = '1918-Sep-17 15:25';

    // Expected output in Russian locale format
    const expectedOutput = '17.09.1918, 15:25';

    // Call the function with the input date and time
    const result = convertDateTimeToRusLocale(inputDateTime);

    // Check if the result matches the expected output
    expect(result).toBe(expectedOutput);
  });

  test('should handle invalid input', () => {
    // Invalid input (non-parsable date and time)
    const invalidInput = 'invalidDateTime';

    // Expected output for invalid input
    const expectedOutput = 'Invalid Date';

    // Call the function with invalid input
    const result = convertDateTimeToRusLocale(invalidInput);

    // Check if the result matches the expected output
    expect(result).toBe(expectedOutput);
  });
});

describe('formatIntegerToRusLocale', () => {
  test('should format a positive integer to Russian locale format', () => {
    // Input positive integer
    const inputNumber = 1234567;

    // Expected output in Russian locale format
    const expectedOutput = /^1\s234\s567$/;

    // Call the function with the input number
    const result = formatIntegerToRusLocale(inputNumber);

    // Check if the result matches the expected output using regex
    expect(result).toMatch(expectedOutput);
  });

  test('should format a negative integer to Russian locale format', () => {
    // Input negative integer
    const inputNumber = -9876543;

    // Expected output in Russian locale format
    const expectedOutput = /^-9\s876\s543$/;

    // Call the function with the input number
    const result = formatIntegerToRusLocale(inputNumber);

    // Check if the result matches the expected output using regex
    expect(result).toMatch(expectedOutput);
  });

  test('should format zero to Russian locale format', () => {
    // Input zero
    const inputNumber = 0;

    // Expected output in Russian locale format
    const expectedOutput = '0';

    // Call the function with the input number
    const result = formatIntegerToRusLocale(inputNumber);

    // Check if the result matches the expected output
    expect(result).toBe(expectedOutput);
  });
});

describe('makeRusPluralization', () => {
  let forms: [string, string, string]; // Declare the forms variable

  beforeEach(() => {
    // Initialize the forms array before each test
    forms = ['лунная орбита', 'лунные орбиты', 'лунных орбит'];
  });

  test('should use the singular form for 1', () => {
    const numbers = [1, 21, 31];
    const results = numbers.map((number) => makeRusPluralization(forms, number));
    expect(results).toEqual(['1 лунная орбита', '21 лунная орбита', '31 лунная орбита']);
  });

  test('should use the plural form for 2, 3, and 4, except for 12, 13, and 14', () => {
    const numbers = [2, 3, 4];
    const results = numbers.map((number) => makeRusPluralization(forms, number));
    expect(results).toEqual(['2 лунные орбиты', '3 лунные орбиты', '4 лунные орбиты']);
  });

  test('should use the plural form for numbers other than 1, 2, 3, and 4, except for 12, 13, and 14', () => {
    const numbers = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    const results = numbers.map((number) => makeRusPluralization(forms, number));
    expect(results).toEqual([
      '5 лунных орбит',
      '6 лунных орбит',
      '7 лунных орбит',
      '8 лунных орбит',
      '9 лунных орбит',
      '10 лунных орбит',
      '11 лунных орбит',
      '12 лунных орбит',
      '13 лунных орбит',
      '14 лунных орбит',
      '15 лунных орбит',
      '16 лунных орбит',
      '17 лунных орбит',
      '18 лунных орбит',
      '19 лунных орбит',
      '20 лунных орбит',
    ]);
  });
});

describe('convertStringToRoundedNumber', () => {
  test('should convert a valid string to a rounded number with default decimal places (2)', () => {
    const inputString = '123.456';
    const result = convertStringToRoundedNumber(inputString);
    expect(result).toBe(123.46); // Rounded to 2 decimal places
  });

  test('should convert a valid string to a rounded number with custom decimal places (1)', () => {
    const inputString = '123.456';
    const result = convertStringToRoundedNumber(inputString, 1);
    expect(result).toBe(123.5); // Rounded to 1 decimal place
  });

  test('should return NaN for an invalid string', () => {
    const inputString = 'invalid-number';
    const result = convertStringToRoundedNumber(inputString);
    expect(isNaN(result)).toBe(true); // Should return NaN for invalid input
  });
});

describe('convertHttpToHttpsString', () => {
  test('should replace "http:" with "https:" in a given string', () => {
    const httpString = 'http://example.com';
    const result = convertHttpToHttpsString(httpString);
    expect(result).toBe('https://example.com');
  });

  test('should not modify a string that does not start with "http:"', () => {
    const nonHttpString = 'https://example.com';
    const result = convertHttpToHttpsString(nonHttpString);
    expect(result).toBe(nonHttpString);
  });

  test('should handle "http://" followed by other characters', () => {
    const stringWithPath = 'http://example.com/path';
    const result = convertHttpToHttpsString(stringWithPath);
    expect(result).toBe('https://example.com/path');
  });
});
