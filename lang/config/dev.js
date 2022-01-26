// env

process.env.NODE_ENV = "development";

//

// const tsConfigPaths = require("tsconfig-paths");
// const cleanup = tsConfigPaths.register();

const tsConfig = require("../tsconfig.json");
const tsConfigPaths = require("tsconfig-paths");

const cleanup = tsConfigPaths.register({
  baseUrl: tsConfig.compilerOptions.baseUrl,
  paths: tsConfig.compilerOptions.paths
});
