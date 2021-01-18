const path = require("path");
const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
const env = require(`./environments/${process.env.MODE}`);

module.exports = withCSS(
  withSass({
    basePath: env.basePath,
    sassOptions: {
      includePaths: [path.join(__dirname, "styles")],
    },
    trailingSlash: true,
    env: {
      mode: process.env.MODE,
    },
  })
);
