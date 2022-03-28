// const CommonjsPlug = require('@etcpack/commonjs-plug');
const VueLoaderPlugin = require('./vue-loader-plug/index.js');

module.exports = {

    // 打包入口
    entry: './src/index.js',

    // 打包出口
    output: 'build/main.js',

    redirect: {
        'vue': "./src/lib/vue.js"
    },

    loader: [{
        test: /\.js$/,
        filter(filepath) {
            return !/node\_modules\/vue\/dist\/vue\.js$/.test(filepath);
        },
        handler: ['@etcpack/babel-loader']
    }, {
        test: /\.(css|scss)$/,
        handler: ['./vue-style-loader/index.js', '@etcpack/scss-loader']
    }, {
        test: /\.vue$/,
        handler: ['./vue-loader/index.js']
    }],
    plug: [
        // new CommonjsPlug(),
        new VueLoaderPlugin()
    ]
};
