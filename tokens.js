const tokens = new Map(Object.entries({
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

    'not': {token: 'NOT'},
    'and': {token: 'AND'},
    'or': {token: 'OR'},

    'let': {token: 'LET'},
    'be': {token: 'ASSIGN'},

    'fn': {token: 'FUNCTION'},

    'true': {token: 'TRUE'},
    'false': {token: 'FALSE'},

    'if': {token: 'IF'},
    'else': {token: 'ELSE'},

    'return': {token: 'RETURN'},

    'number': {token: 'NUMBER'},
    'identifier': {token: 'IDENTIFIER'},

    'eof': {token: 'EOF'},
    'illegal': {token: 'ILLEGAL'}
}));

const keywords = [
    'let',
    'be',

    'fn',

    'true',
    'false',

    'is',
    'isnt',

    'not',
    'and',
    'or',

    'if',
    'else',
    'return',
];

module.exports = {tokens, keywords};