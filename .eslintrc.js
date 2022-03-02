module.exports = {
  env: {
    // 사용환경
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
  ], // eslint rule airbnb가 가장 대중적
  parser: '@typescript-eslint/parser', // typescript 및 jsx(react)지원을 위한 옵션
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'prettier/prettier': ['error'], // new
  }, // rule을 off 하고 싶은 예외 경우
};
