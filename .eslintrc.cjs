module.exports = {
  env: {
    es2021: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest'
  },
  rules: {
    'prettier/prettier': 'error'
  },
  plugins: ['prettier'],
  ignorePatterns: ['node_modules/', 'dist']
}
