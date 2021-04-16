const withPlugin = require("next-compose-plugins");
const withReactSvg = require("next-react-svg");
const withImages = require("next-images");

const path = require("path");

module.exports = withPlugin([
  withImages({}),
  withReactSvg({
    include: path.resolve(__dirname, "./public/images"),
    webpack(config, option) {
      return config;
    },
  }),
]);
