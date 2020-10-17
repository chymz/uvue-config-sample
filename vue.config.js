const webpack = require('webpack');

module.exports = {
  chainWebpack(config) {
    const vars = ['PRIVATE_VAR', 'PUBLIC_VAR'];
    const defines = {};

    for (const v of vars) {
      defines[`process.env.${v}`] = JSON.stringify(process.env[v]);
    }

    config.plugin('uvueConfig').use(webpack.DefinePlugin, [defines]);
  },
};
