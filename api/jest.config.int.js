'use strict';

const config = require('./jest.config');

config.testMatch = [
  '**/__tests__/integration/**.test.ts'
]

module.exports = config;
