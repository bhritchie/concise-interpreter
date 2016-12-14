import {characterTokens, keywordTokens, specialTokens} from './tokens';

const VALID_IDENTIFIER = /^[a-zA-Z_]\w*[?!]?/;
const VALID_NUMBER = /^\d+(\.?\d+)?/;

const identifierToken = matches => matches && (keywordTokens.get(matches[0]) || {...specialTokens.get('identifier'), literal: matches[0]});
const numberToken = matches => matches && {...specialTokens.get('number'), literal: matches[0]};

const read = (input='', tokens=[]) => {
    input = input.replace(/^\s*/, '');
    if (!input) {return [...tokens, specialTokens.get('eof')]; }

    const token = characterTokens.get(input[0])
        || identifierToken(input.match(VALID_IDENTIFIER))
        || numberToken(input.match(VALID_NUMBER))
        || {...specialTokens.get('illegal'), literal: input[0]};

    return read(input.substring(token.literal ? token.literal.length : 1), [...tokens, token])
};

const testInput = `illegal eof hasOwnProperty ;(,) h3yW1thNumb3rs!! {+ ;  99 let }; 11.22 33.44.55 heyAgain ; _what? +- _ =≤ 123 return 1 ≥ be = ≠ ~ & | fn someVariable %`;
console.log(JSON.stringify(read(testInput), null, 4));

export {read};