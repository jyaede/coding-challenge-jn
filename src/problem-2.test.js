const { sumOfMultiples3or5Below1000, sumOfMultiplesGeneric } = require("./problem-2");

test('Problem 2: sum below 1000 of multiples 3 or 5 to equal 233168', () => {
    const sum = sumOfMultiples3or5Below1000();

    expectedSum = 233168;

    expect(sum).toEqual(expectedSum);
});

const sumOfMultiplesTestCases = [
    [10, [3, 5], 23],
    [5, [3, 5], 3],
    [6, [3, 5], 8],
    [10, [2, 4, 3], 32],
    [1000, [3, 5], 233168]
];

test.each(sumOfMultiplesTestCases)('Generic sum below %s of multiples %s to equal %s', (number, multiples, expectedSum) => {
    const sum = sumOfMultiplesGeneric(number, multiples);

    expect(sum).toEqual(expectedSum);
});