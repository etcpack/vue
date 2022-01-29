<p align='center'>
    <a href='https://etcpack.github.io/api' target='_blank'>
        <img src='./logo.png'>
    </a>
</p>

# vue
📦 为Vue.js提供的基于EtcPack的打包支持

## Issues
使用的时候遇到任何问题或有好的建议，请点击进入[issue](https://github.com/etcpack/vue/issues)！

## How to use?

```
npm install --save-dev @etcpack/vue-loader @etcpack/vue-loader-plug @etcpack/vue-style-loader
```

然后在```etcpack.config.js```中添加配置，例如：

```js
const VueLoaderPlugin = require('@etcpack/vue-loader-plug');

module.exports = {
    ......
    loader: [{
        test: /\.js$/,
        handler: ['@etcpack/babel-loader']
    },
    {
        test: /\.css$/,
        handler: ['@etcpack/vue-style-loader', '@etcpack/scss-loader']
    }, {
        test: /\.paper$/,
        handler: ['@etcpack/vue-loader']
    }],
    plug: [
        new VueLoaderPlugin()
    ]
    ......
};

```

开源协议
---------------------------------------
[MIT](https://github.com/etcpack/vue/blob/master/LICENSE)

Copyright (c) 2022 [hai2007](https://hai2007.gitee.io/sweethome/) 走一步，再走一步。
