// vue-cli的配置文件
module.exports = {
  devServer: {
    port:3000,
    proxy: {
      "/api": {
        target: "http://test.my-site.com",
      },
    },
  },
  configureWebpack: require("./webpack.config"),
};
