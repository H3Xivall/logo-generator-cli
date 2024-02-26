module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2023: true,
        jest:true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:jest/recommended',
        'plugin:prettier/recommended',
    ],
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 13,
    },
    plugins: ['jest'],
    rules: {
        'jest/no-disabled-tests': 'warn',
        'jest/valid-expect': 'warn',
        'inquirer/no-async-promise-executor': 'warn',
    }
}