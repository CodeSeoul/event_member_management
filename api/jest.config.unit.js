'use strict';

const config = require('./jest.config');

config.testMatch = [
  '**/__tests__/unit/*.test.ts'
]

module.exports = config;
