require('./bootstrap');

window.Vue = require('vue').default;
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { store } from './store/store';
import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';
// configure language
locale.use(lang);

Vue.use(ElementUI);

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('student-form-component', require('./components/student/StudentFormComponent.vue').default);
Vue.component('student-table-component', require('./components/student/StudentTableComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    store,
    el: '#vue-app',
});
