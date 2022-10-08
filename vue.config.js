// vue-cli的配置文件
module.exports = {
  devServer: {
    port: 3000,
    proxy: {
      "/api": {
        target: "http://159.75.17.167:7001/",
      },
    },
  },
  publicPath: '',
  configureWebpack: require("./webpack.config"),
};
