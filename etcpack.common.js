const CommonjsPlug = require('@etcpack/commonjs-plug');

module.exports = {

    // 打包入口
    entry: './src/index.js',

    // 打包出口
    output: 'build/main.js',

    loader: [{
        test: /\.js$/,
        handler: ['@etcpack/babel-loader']
    }],
    plug: [
        new CommonjsPlug()
    ]
};
