// env

process.env.NODE_ENV = "production";

//

const tsConfig = require("../tsconfig.json");
const tsConfigPaths = require("tsconfig-paths");

const baseUrl = "./dist"; // Either absolute or relative path. If relative it's resolved to current working directory.
const cleanup = tsConfigPaths.register({
  baseUrl,
  paths: tsConfig.compilerOptions.paths
});

// When path registration is no longer needed
// cleanup();

// See:
// https://github.com/Kehrlann/module-alias-74
// https://github.com/ilearnio/module-alias/issues/74
// https://github.com/dividab/tsconfig-paths
