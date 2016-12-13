const {tokens, keywords} = require('./tokens');

// Only check the start of the string
const VALID_IDENTIFIER_START = /^[a-zA-Z_]/;
const VALID_IDENTIFIER = /^[a-zA-Z_]\w*[?!]?/;
const VALID_NUMBER_START = /^\d/;
const VALID_NUMBER = /^\d*/; // add at least decimals

const input = `
    ;(,) hey111yeah!! {+ ;  99 let }; hey ; what? +- _ = 123 return 1
`;

const reader = (input = '') => {

    const collector = [];

    (function read (string) {

        // use concat along the way so don't need to keep the collector separate

        if (!string) {
            collector.push(tokens.EOF);
            return;
        }

        const ch = string[0];

        if (['(', ')', '{', '}', ',', ';', '+', '-'].includes(ch)) {
            collector.push(tokens[ch]);
            return read(string.substring(1).trim());
        }

        if (string.match(VALID_IDENTIFIER_START)) {
            const identifier = string.match(VALID_IDENTIFIER)[0];

            if (keywords.includes(identifier)) {
                collector.push(tokens[identifier]);
            } else {
                collector.push(Object.assign({}, tokens.identifier, {value: identifier}));
            }

            return read(string.substring(identifier.length).trim());
        }

        if (string.match(VALID_NUMBER_START)) {
            const number = string.match(VALID_NUMBER)[0];
            collector.push(Object.assign({}, tokens.number, {value: +number}));
            return read(string.substring(number.length).trim());
        }

        collector.push(Object.assign({}, tokens.ILLEGAL, {value: ch}))
        return read(string.substring(1).trim())

    })(input.trim());

    return collector;
};

console.log(JSON.stringify(reader(input), null, 4));

module.exports = {reader};