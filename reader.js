const {tokens, keywords} = require('./tokens');

const VALID_IDENTIFIER_START = /^[a-zA-Z_]/;
const VALID_IDENTIFIER = /^[a-zA-Z_]\w*[?!]?/;
const VALID_NUMBER_START = /^\d/;
const VALID_NUMBER = /^\d*\.?\d*/;
const SPECIAL_CHARACTERS = ['(', ')', '{', '}', ',', ';', '+', '-', '*', '/', '=', '≠', '<', '>', '≤', '≥', '~', '&', '|'];

const testInput = `
    hasOwnProperty ;(,) h3yW1thNumb3rs!! {+ ;  99 let }; 11.22 11.22.33 heyAgain ; _what? +- _ =≤ 123 return 1 ≥ be = ≠ ~ & | fn someVariable %
`;

const read = (input = '', collector = []) => {
    input = input.replace(/^\s*/, '');

    if (!input) {
        return [...collector, tokens.get('eof')];

    } else if (SPECIAL_CHARACTERS.includes(input[0])) {
        return read(input.substring(1), [...collector, tokens.get(input[0])]);

    } else if (input.match(VALID_IDENTIFIER_START)) {
        const value = input.match(VALID_IDENTIFIER)[0];
        const token = tokens.get(value) || Object.assign({}, tokens.get('identifier'), {value});
        return read(input.substring(value.length), [...collector, token]);

    } else if (input.match(VALID_NUMBER_START)) {
        const value = input.match(VALID_NUMBER)[0];
        const token = Object.assign({}, tokens.get('number'), {value: +value})
        return read(input.substring(value.length), [...collector, token]);

    } else {
        const token = Object.assign({}, tokens.get('illegal'), {value: input[0]});
        return read(input.substring(1), [...collector, token])
    }
};

console.log(JSON.stringify(read(testInput), null, 4));

module.exports = {read};