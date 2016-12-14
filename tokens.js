const characterTokens = new Map(Object.entries({
    '(': {token: 'LPAREN'},
    ')': {token: 'RPAREN'},
    '{': {token: 'LBRACE'},
    '}': {token: 'RBRACE'},

    ',': {token: 'COMMA'},
    ';': {token: 'SEMICOLON'},

    '+': {token: 'PLUS'},
    '-': {token: 'MINUS'},
    '*': {token: 'MULTIPLY'},
    '/': {token: 'DIVIDE'},

    '=': {token: 'EQUALS'},
    '≠': {token: 'NOT_EQUALS'},

    'is': {token: 'EQUALS'},
    'isnt': {token: 'NOT_EQUALS'},

    '<': {token: 'LESS_THAN'},
    '>': {token: 'GREATER_THAN'},
    '≤': {token: 'LESS_THAN_OR_EQUALS'},
    '≥': {token: 'GREATER_THAN_OR_EQUALS'},

    '~': {token: 'NOT'},
    '&': {token: 'AND'},
    '|': {token: 'OR'},
}));

const keywordTokens = new Map(Object.entries({
    'not': {token: 'NOT', literal: 'not'},
    'and': {token: 'AND', literal: 'and'},
    'or': {token: 'OR', literal: 'or'},

    'let': {token: 'LET', literal: 'let'},
    'be': {token: 'ASSIGN', literal: 'be'},

    'fn': {token: 'FUNCTION', literal: 'fn'},

    'true': {token: 'TRUE', literal: 'true'},
    'false': {token: 'FALSE', literal: 'false'},

    'if': {token: 'IF', literal: 'if'},
    'else': {token: 'ELSE', literal: 'else'},

    'return': {token: 'RETURN', literal: 'return'},
}));

const specialTokens = new Map(Object.entries({
    'number': {token: 'NUMBER', literal: 'number'},
    'identifier': {token: 'IDENTIFIER', literal: 'identifier'},
    'illegal': {token: 'ILLEGAL'},
    'eof': {token: 'EOF'},
}));

// module.exports = {characterTokens, keywordTokens, characterTokens};
export {characterTokens, keywordTokens, specialTokens};