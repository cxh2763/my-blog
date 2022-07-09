// vue-cli的配置文件
module.exports = {
  devServer: {
    port: 3000,
    proxy: {
      "/api": {
        target: "https://www.zhihu.com",
      },
    },
  },
  publicPath: '',
  configureWebpack: require("./webpack.config"),
};
