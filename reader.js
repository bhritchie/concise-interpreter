// const {tokens} = require('./tokens');

import {characterTokens, keywordTokens, specialTokens} from './tokens';

const VALID_IDENTIFIER_START = /^[a-zA-Z_]/;
const VALID_IDENTIFIER = /^[a-zA-Z_]\w*[?!]?/;
const VALID_NUMBER_START = /^\d/;
const VALID_NUMBER = /^\d*\.?\d*/;

const testInput = `
    illegal eof hasOwnProperty ;(,) h3yW1thNumb3rs!! {+ ;  99 let }; 11.22 11.22.33 heyAgain ; _what? +- _ =≤ 123 return 1 ≥ be = ≠ ~ & | fn someVariable %
`;

const read = (input = '', collector = []) => {
    input = input.replace(/^\s*/, '');
    let token;
    if (!input) {
        return [...collector, specialTokens.get('eof')];
    } else if ([...characterTokens.keys()].includes(input[0])) {
        token = characterTokens.get(input[0]);
    } else if (input.match(VALID_IDENTIFIER_START)) {
        const literal = input.match(VALID_IDENTIFIER)[0];
        token = keywordTokens.get(literal) || {...specialTokens.get('identifier'), literal};
    } else if (input.match(VALID_NUMBER_START)) {
        token = {...specialTokens.get('number'), literal: input.match(VALID_NUMBER)[0]};
    } else {
        token = {...specialTokens.get('illegal'), literal: input[0]};
    }
    return read(input.substring(token.literal ? token.literal.length : 1), [...collector, token])
};

console.log(JSON.stringify(read(testInput), null, 4));

module.exports = {read};