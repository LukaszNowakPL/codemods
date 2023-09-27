module.exports = {
  collectCoverage: false,
  collectCoverageFrom: ["./src/**/*.{js,jsx,ts,tsx}"],

  reporters: ["default"],

  projects: [
    {
      displayName: "codemods",
      testEnvironment: "node",
      moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
      roots: ["codemods"],
      transform: { "^.+\\.(tsx|js|ts)?$": "ts-jest" },
    },
  ],
};
