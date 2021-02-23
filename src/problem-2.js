// Problem 2 Solution
function sumOfMultiples3or5Below1000() {
    let runningSum = 0;

    for (let i = 0; i < 1000; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            runningSum += i;
        }
    }

    return runningSum;
}

// Generic solution
function sumOfMultiplesGeneric(number = 1000, multiples = []) {
    let runningSum = 0;

    for (let i = 0; i < number; i++) {
        for (const multiple of multiples) {
            if (i % multiple === 0) {
                runningSum += i
                break;
            }
        }
    }

    return runningSum;
}

exports.sumOfMultiples3or5Below1000 = sumOfMultiples3or5Below1000
exports.sumOfMultiplesGeneric = sumOfMultiplesGeneric