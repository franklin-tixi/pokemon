import type { Config } from "@jest/types";
export default async (): Promise<Config.InitialOptions> => {
  return {
    // setupFilesAfterEnv: ["./node_modules/jest-enzyme/lib/index.js"],
    verbose: true,
    testEnvironment: "jest-environment-jsdom",
    setupFiles: ["./jest.setup.ts"],
    preset: "ts-jest",
    transform: {
      "^.+\\.ts?$": "ts-jest",
    },
    moduleNameMapper: {
      "^@component": "<rootDir>/src/components",
      "^@pages": "<rootDir>/src/pages",
      "^@helpers/(.*)$": "<rootDir>/src/helpers/$1",
    },
  };
};
