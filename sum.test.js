const sum = require('./sum');

test('Adds two parameters', () => {
    expect(
        sum(1, 2)
    ).toBe(3)
    expect(
        sum(2, 2)
    ).toBe(4)
    expect(
        sum(2,3)
    ).toBe(5)
    expect(
        sum(2,4)
    ).toBe(6)
})

// To run the test cases, type 'npm run test' in the terminal.
// If this command is not running, check the package.json file and see if the test script is present.
