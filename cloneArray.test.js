const cloneArray = require('./cloneArray');

test('properly clones array', () => {
    const array = [1, 2, 3];
    expect(
        cloneArray(array)
    ).toEqual(array);
    // This will cause an error, since the arrays are not located in the same memory location
    expect(
        cloneArray(array)
    ).toBe(array);
});
