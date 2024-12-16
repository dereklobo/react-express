module.exports = {
    'env': {
        'node': true,
        'es2020':true
    },
    'rules':{
        'no-empty':'error',
        'no-multiple-empty-lines': 'warn',
        'no-var': 'error',
        'prefer-const':'error'
    },
    "parser": "@babel/eslint-parser",
    "parserOptions": {
        "sourceType": "module",
        "ecmaVersion": 2020
    }
}