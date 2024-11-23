module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest', // Usa el transformador correcto para Vue 3
    '^.+\\.js$': 'babel-jest', // Nota: el regex debe incluir el punto (.) para reconocer archivos .js
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(js|ts)$',
  moduleFileExtensions: ['js', 'json', 'vue'], // Incluye json por si es necesario
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  coveragePathIgnorePatterns: ['/node_modules/', '/tests/'],
  coverageReporters: ['text', 'json-summary'],
  testEnvironmentOptions: {
    customExportConditions: ['node', 'node-addons'],
  },
}
