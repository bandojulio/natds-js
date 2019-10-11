module.exports = {
  "roots": [
    "<rootDir>/src"
  ],
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
  "snapshotSerializers": [
    "enzyme-to-json/serializer"
  ],
  "setupFilesAfterEnv": [
    "<rootDir>/config/test/setupEnzyme.ts",
    "<rootDir>/config/test/setupChai.ts"
  ]
}