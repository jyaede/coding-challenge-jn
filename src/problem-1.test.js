const { hasMatchingBraces } = require("./problem-1");

const testCasesBrackets = [
    // Provided Test Cases
    ["{}", true],
    ["}{", false],
    ["{{}", false],
    ["", true],

    // Other Test Cases
    ["}}{", false],
    ["}{}", false],
    ["{}{", false],
    ["}}{{", false],
    ["{{{{}}}}}", false],
    ["{{{}{}}}}}", false],
    ["{}{}{}{}{{{{}}}}", true],
    ["{{}{}{}{}{{{{}}}}}", true],
    ["{hello {node} world}", true],
    ["{hello {123512} world}", true],
    ["{hello {@#$%^&*()(*&^%$#@[][][])} world}", true],
    [" { hello world } ", true],
    ["{string{{hello}}{world}}}", false],
    ["{string{{hello}}{world}}{", false],
    ["{string{ {hello}}{{world}}", false],
    ["{}{string{hello}{world}}", true],
    ["{}{string{hello}{world}}}}}}}}}}}}}}}}}", false],
];

test.each(testCasesBrackets)('Expect string `%s` to match as %s', (input, expected) => {
    const matches = hasMatchingBraces(input);

    expect(matches).toBe(expected);
});
