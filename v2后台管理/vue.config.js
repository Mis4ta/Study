const path = require('path') //必须引入
const resolve = dir => path.join(__dirname, dir)//必须引入
module.exports = {
  transpileDependencies: true,
//配置代理
devServer: {},
// 配置svg
chainWebpack: config => {
  config.module
    .rule('svg')
    .exclude.add(resolve('src/assets/icons')) //放置svg的路径
    .end();
  config.module
    .rule('icons')
    .test(/\.svg$/)
    .include.add(resolve('src/assets/icons')) //放置svg的路径
    .end()
    .use('svg-sprite-loader')
    .loader('svg-sprite-loader')
    .options({
        symbolId: 'icon-[name]'
    });
},
}

