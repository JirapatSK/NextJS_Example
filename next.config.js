const env = require(`./environments/${process.env.MODE}`);
const path = require("path");
const withPreact = require("next-plugin-preact");

module.exports = withPreact({
  basePath: env.basePath,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  trailingSlash: true,
  env: {
    mode: process.env.MODE,
  },
});
