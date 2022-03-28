import Vue from 'vue';

import App from './App.vue';

let vm = new Vue({
    el: document.getElementById('root'),
    render: createElement => createElement(App)
});

console.log(vm);
