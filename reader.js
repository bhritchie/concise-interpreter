const {tokens, keywords} = require('./tokens');

// Only check the start of the string
const VALID_IDENTIFIER_START = /^[a-zA-Z_]/;
const VALID_IDENTIFIER = /^[a-zA-Z_]\w*[?!]?/;
const VALID_NUMBER_START = /^\d/;
const VALID_NUMBER = /^\d*/; // add at least decimals

const input = `
    ;(,) hey111yeah!! {+ ;  99 let }; hey ; what? +- _ = 123 return 1
`;

const read = (input = '', collector = []) => {
    input = input.replace(/^\s*/, '');

    if (!input) {
        return [...collector, tokens.EOF];

    } else if (['(', ')', '{', '}', ',', ';', '+', '-'].includes(input[0])) {
        return read(input.substring(1), [...collector, tokens[input[0]]]);

    } else if (input.match(VALID_IDENTIFIER_START)) {
        const identifier = input.match(VALID_IDENTIFIER)[0];
        let token;
        if (keywords.includes(identifier)) {
            token = tokens[identifier];
        } else {
            token = Object.assign({}, tokens.identifier, {value: identifier});
        }
        return read(input.substring(identifier.length), [...collector, token]);

    } else if (input.match(VALID_NUMBER_START)) {
        const number = input.match(VALID_NUMBER)[0];
        const token = Object.assign({}, tokens.number, {value: +number})
        return read(input.substring(number.length), [...collector, token]);

    } else {
        const token = Object.assign({}, tokens.ILLEGAL, {value: input[0]});
        return read(input.substring(1), [...collector, token])
    }
};

console.log(JSON.stringify(read(input), null, 4));

module.exports = {read};