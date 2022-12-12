const path = require("path");

module.exports = {
  configureWebpack: {
    plugins: [
      require("unplugin-vue-components/webpack")({
        resolvers: [
          require("unplugin-vue-components/resolvers").BootstrapVue3Resolver(),
        ],
      }),
    ],
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "./src/styles/theme.scss";`,
        sassOptions: {
          alias: {
            "bootstrap-core": path.resolve(
              __dirname,
              "./node_modules/bootstrap/scss/bootstrap"
            ),
            "bootstrap-vue": path.resolve(
              __dirname,
              "./node_modules/bootstrap-vue-3/src/styles/styles"
            ),
          },
        },
      },
    },
  },
};
