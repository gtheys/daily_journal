// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuelidate from 'vuelidate';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.css';
import TreeView from 'vue-json-tree-view';
import App from './App';
import router from './router';

Vue.use(Vuelidate);
Vue.use(Vuetify);
Vue.use(TreeView);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
