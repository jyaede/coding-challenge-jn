
// Ensures matching all `{` have a closing `}` and all `}` have opening brace
// Problem 1 Solution
function hasMatchingBraces(string) {
    let outstandingBraces = 0;
    for(const s of string) {
        if(s === '{' && outstandingBraces >= 0) outstandingBraces++;
        else if (s === '}') outstandingBraces--;
    }
    return outstandingBraces === 0;
}

exports.hasMatchingBraces = hasMatchingBraces;