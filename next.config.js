const path = require("path");
const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");

module.exports = withCSS(
  withSass({
    basePath: process.env.BASE_PATH,
    sassOptions: {
      includePaths: [path.join(__dirname, "styles")],
    },
    trailingSlash: true,
    env: {
      mode: process.env.MODE,
    },
  })
);
