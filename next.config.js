require("dotenv").config({ path: `./environments/.env.${process.env.MODE}` });

module.exports = {
  basePath: process.env.BASE_PATH,
  trailingSlash: true,
  env: {
    mode: process.env.APP_MODE,
    base_path: process.env.BASE_PATH,
  },
};
