// const tokens = {
//     ILLEGAL: 'ILLEGAL',
//     EOF: 'EOF',
//     IDENT: 'IDENT',
//     INTEGER: 'INTEGER',
//     ASSIGN: '=',
//     PLUS: '+',
//     COMMA: ',',
//     SEMICOLON: ';',
//     MINUS: '-',
//     BANG: '!',
//     SLASH: '/',
//     ASTERISK: '*',
//     LT: '<',
//     GT: '>',
//     LPAREN: '(',
//     RPAREN: ')',
//     LBRACE: '{',
//     RBRACE: '}',
//     FUNCTION: 'FUNCTION',
//     LET: 'LET',
//     TRUE: 'TRUE',
//     FALSE: 'FALSE',
//     IF: 'IF',
//     ELSE: 'ELSE',
//     RETURN: 'RETURN',
//     EQ: '==',
//     NOTEQ: '!=',
// };


const tokens = {
    '(': {token: 'LPAREN'},
    ')': {token: 'RPAREN'},
    '{': {token: 'LBRACE'},
    '}': {token: 'RBRACE'},
    ',': {token: 'COMMA'},
    ';': {token: 'SEMICOLON'},
    '+': {token: 'PLUS'},
    '-': {token: 'MINUS'},

    'fn': {token: 'FUNCTION'},
    'let': {token: 'LET'},
    'true': {token: 'TRUE'},
    'false': {token: 'FALSE'},
    'if': {token: 'IF'},
    'else': {token: 'ELSE'},
    'return': {token: 'RETURN'},

    'number': {token: 'NUMBER'},
    'identifier': {token: 'IDENTIFIER'},

    EOF: {token: 'EOF'},
    ILLEGAL: {token: 'ILLEGAL'}
};

const keywords = [
    'fn',
    'let',
    'true',
    'false',
    'if',
    'else',
    'return',
];

// const keywords = {
//     'fn': tokens.FUNCTION,
//     'let': tokens.LET,
//     'true': tokens.TRUE,
//     'false': tokens.FALSE,
//     'if': tokens.IF,
//     'else': tokens.ELSE,
//     'return': tokens.RETURN,
// };

module.exports = {tokens, keywords};