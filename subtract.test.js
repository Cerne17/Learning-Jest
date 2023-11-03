const subtract = require('./subtract');

test('Adds two parameters', () => {
    expect(
        subtract(2, 2)
    ).toBe(0)
    expect(
        subtract(3, 2)
    ).toBe(1)
    expect(
        subtract(2,3)
    ).toBe(-1)
    expect(
        subtract(2,4)
    ).toBe(-2)
})

// To run the test cases, type 'npm test' in the terminal.
