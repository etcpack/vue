module.exports = function (templateObj, id) {

    if (templateObj == null) return 'createElement("div",{style:"color:red"},["Invalid Template"])';

    let xhtmlJson = templateObj.xhtmlJson;

    return `function(createElement){

        return ${(function doit(pnode) {

            // 如果是文本
            if (pnode.type == 'text') {

                let text = pnode.content.trim()

                    // 由于回车的问题，非`的字符串不支持，我们需要使用转义替换
                    .replace(/\n/g, '↵').replace(/\r/g, '')

                    // 特殊转义字符进行校对
                    .replace(/\&lt;/g, '<')
                    .replace(/\&gt;/g, '>')
                    .replace(/\&amp;/g, '&');

                let normal = text.split(/\{\{[^}]+\}\}/);
                let dynamic = text.match(/\{\{[^}]+\}\}/g) || [];

                let _text = JSON.stringify(normal[0]);
                for (let index = 0; index < dynamic.length; index++) {
                    _text += "+this._s(this." + (dynamic[index].replace(/^\{\{/, '').replace(/\}\}$/, '').trim()) + ")+" + JSON.stringify(normal[index + 1]);
                }

                return _text;

            }

            // 不然就是结点
            else {

                let childrenRender = "[", cNodes = pnode.childNodes;
                for (let i = 0; i < cNodes.length; i++) {
                    childrenRender += doit(xhtmlJson[cNodes[i]]) + ",";
                }
                childrenRender = childrenRender.replace(/,$/, '') + "]";

                pnode.attrs['data-vue-' + id] = "";


                let directives = "", on = "", attrs = {};

                for (let key in pnode.attrs) {

                    // 事件
                    if (/^@/.test(key)) {
                        on += key.replace(/^@/, '') + ":" + "this." + pnode.attrs[key] + ",";
                    }

                    // 指令
                    else if (/^v\-/.test(key)) {

                        directives += `{
                            name:'${key.replace(/^v\-/, '')}',
                            rawName:'${key}',
                            value:this.${pnode.attrs[key]},
                            expression:'${pnode.attrs[key]}'
                        },`;

                    }

                    // 属性
                    else {
                        attrs[key] = pnode.attrs[key];
                    }

                }

                return `createElement('${pnode.name}',{
                    on:{
                        ${on.replace(/\,$/, '')}
                    },
                    attrs:${JSON.stringify(attrs, null, 2)},
                    directives:[
                        ${directives.replace(/\,$/, '')}
                    ],
                },${childrenRender})`;

            }


        }(templateObj.pnode))}

    }`;

};
