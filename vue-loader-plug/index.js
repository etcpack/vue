function VueLoaderPlugin() { }

VueLoaderPlugin.prototype.before = function (config) {

    let jsLoader, cssLoader, vueLoader;
    for (let item of config.loader) {

        if (item.test.test('xxx.vue')) {
            vueLoader = item.handler;
        }

        if (item.test.test('xxx.css')) {
            cssLoader = item.handler;
        }

        if (item.test.test('xxx.js')) {
            jsLoader = item.handler;
        }

    }

    config.loader.push({
        test: /\.vue\?Vue\&type\=script\&lang\=js&hash\=[0-9a-z]+$/,
        handler: [...jsLoader, ...vueLoader]
    });

    config.loader.push({
        test: /\.vue\?Vue\&type\=style\&lang\=css\&hash\=[0-9a-z]+$/,
        handler: [...cssLoader, ...vueLoader]
    });

};

module.exports = VueLoaderPlugin;
