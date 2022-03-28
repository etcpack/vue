/******/
/******/  // EtcPack Bootstrap
/******/  // （ https://etcpack.github.io/api/ ）
/******/  
/******/  // 记录bundle的函数源码
/******/  window.__etcpack__bundleSrc__ = {};
/******/  
/******/  // 记录bundle的运行结果
/******/  window.__etcpack__bundleObj__ = {};
/******/  
/******/  // 获取bundle结果
/******/  window.__etcpack__getBundle = function (bundleName) {
/******/  
/******/      // 一个bundle只有第一次导入的时候需要执行
/******/      if (!(bundleName in window.__etcpack__bundleObj__)) {
/******/          window.__etcpack__bundleObj__[bundleName] = window.__etcpack__bundleSrc__[bundleName]();
/******/      }
/******/  
/******/      // 返回需要的bundle的结果
/******/      return window.__etcpack__bundleObj__[bundleName];
/******/  }
/******/  
/******/  window.__etcpack__bundleFile__ = {};
/******/  
/******/  // 获取懒加载bundle结果
/******/  window.__etcpack__getLazyBundle = function (fileName, bundleName) {
/******/      return new Promise(function (resolve) {
/******/  
/******/          // 如果加载过了
/******/          if (window.__etcpack__bundleFile__[fileName]) {
/******/              resolve(window.__etcpack__getBundle(bundleName));
/******/              return;
/******/          }
/******/  
/******/          // 获取head标签
/******/          var head = document.getElementsByTagName('head')[0];
/******/  
/******/          // 创建script
/******/          var script = document.createElement('script');
/******/  
/******/          // 设置属性
/******/          script.src = fileName;
/******/  
/******/          // 追加到页面
/******/          head.appendChild(script);
/******/  
/******/          window.__etcpack__bundleFile__[fileName] = true;
/******/  
/******/          script.addEventListener('load', function () {
/******/              resolve(window.__etcpack__getBundle(bundleName));
/******/          }, false);
/******/  
/******/  
/******/      });
/******/  }
/******/  
/************************************************************************/
/******/

/*************************** [bundle] ****************************/
// Original file:./src/index.js
/*****************************************************************/
window.__etcpack__bundleSrc__['0']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('1');
var Vue =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('2');
var App =__etcpack__scope_args__.default;

new Vue({
  el: document.getElementById('root'),
  render: function render(createElement) {
    return createElement(App);
  }
});
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/lib/vue.js
/*****************************************************************/
window.__etcpack__bundleSrc__['1']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= Vue;
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/App.vue
/*****************************************************************/
window.__etcpack__bundleSrc__['2']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    

    // 导入js
__etcpack__scope_args__=window.__etcpack__getBundle('3');
var script =__etcpack__scope_args__.default;


    // 导入css
__etcpack__scope_args__=window.__etcpack__getBundle('4');


    script.render=function(createElement){

        return createElement('div',{"vue":"","data-vue-7ac74a55":""},[createElement('div',{"data-vue-7ac74a55":""},["{{ tips }}"])])

    };

    __etcpack__scope_bundle__.default= script;

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/App.vue?Vue&type=script&lang=js&hash=7ac74a55
/*****************************************************************/
window.__etcpack__bundleSrc__['3']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= {
  data() {
    return {
      tips: "基于EtcPack对Vue项目进行打包！",
    };
  },
};
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/App.vue?Vue&type=style&lang=css&hash=7ac74a55
/*****************************************************************/
window.__etcpack__bundleSrc__['4']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var styleElement = document.createElement('style');
var head = document.head || document.getElementsByTagName('head')[0];
styleElement.innerHTML = "\n div[data-vue-7ac74a55]{\n\ncolor: red;\n\n}\n";
styleElement.setAttribute('type', 'text/css');head.appendChild(styleElement);
  
    return __etcpack__scope_bundle__;
}

window.__etcpack__bundleSrc__['0']();