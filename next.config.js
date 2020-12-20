require("dotenv").config({ path: `./environments/.env.${process.env.MODE}` });
const path = require("path");

module.exports = {
  basePath: process.env.BASE_PATH,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  trailingSlash: true,
  env: {
    mode: process.env.APP_MODE,
    base_path: process.env.BASE_PATH,
  },
};
