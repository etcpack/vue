module.exports = function (parentId, style) {

    style = style.replace(/( {0,}){/g, "{");
    style = style.replace(/( {0,}),/g, ",");

    let temp = "";
    // 分别表示：是否处于注释中、是否处于内容中、是否由于特殊情况在遇到{前完成了hash
    let isSpecial = false, isContent = false, hadComplete = false;
    for (let i = 0; i < style.length; i++) {
        if (style[i] == ':' && !isSpecial && !hadComplete && !isContent) {
            hadComplete = true;
            temp += "[" + parentId + "]";
        } else if (style[i] == '{' && !isSpecial) {
            isContent = true;
            if (!hadComplete) temp += "[" + parentId + "]";
        } else if (style[i] == '}' && !isSpecial) {
            isContent = false;
            hadComplete = false;
        } else if (style[i] == '/' && style[i + 1] == '*') {
            isSpecial = true;
        } else if (style[i] == '*' && style[i + 1] == '/') {
            isSpecial = false;
        } else if (style[i] == ',' && !isSpecial && !isContent) {
            if (!hadComplete) temp += "[" + parentId + "]";
            hadComplete = false;
        }

        temp += style[i];

    }

    return temp;
};
