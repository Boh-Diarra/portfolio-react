const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files
  dir: './apps/portfolio-next',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/apps/portfolio-next/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/apps/portfolio-next/src/$1',
  },
  collectCoverageFrom: [
    'apps/portfolio-next/src/**/*.{js,jsx,ts,tsx}',
    '!apps/portfolio-next/src/**/*.d.ts',
    '!apps/portfolio-next/src/**/*.stories.{js,jsx,ts,tsx}',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  testMatch: [
    '<rootDir>/apps/portfolio-next/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/apps/portfolio-next/src/**/*.{test,spec}.{js,jsx,ts,tsx}',
  ],
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig) 