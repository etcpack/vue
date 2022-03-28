const hash = require('hash-sum');

module.exports = function (source) {

    let shortFilePath = this.filepath.replace(process.cwd(), '').replace(/\\/g, '/');

    const id = hash(shortFilePath);

    if (/\.vue$/.test(this.filepath)) {

        let templateObj = require('./render-html.js')(source, 'template');
        let code = require('./renderFactory')(templateObj, id);

        let exportCode = `

    // 导入js
import script from '${shortFilePath}?Vue&type=script&lang=js&hash=${id}';

    // 导入css
import '${shortFilePath}?Vue&type=style&lang=css&hash=${id}';

    script.render=${code};

    export default script;
`;

        return exportCode;
    } else if (/\.vue\?Vue\&type\=script\&lang\=js\&hash\=[0-9a-z]+$/.test(this.filepath)) {
        let code = require('./render-html.js')(source, 'script');
        return code || 'export default {};';
    } else if (/\.vue\?Vue\&type\=style\&lang\=css\&hash\=[0-9a-z]+$/.test(this.filepath)) {
        let code = require('./render-html.js')(source, 'style');
        return code || "";
    }

};
