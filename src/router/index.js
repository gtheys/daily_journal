import Vue from 'vue';
import Router from 'vue-router';
import Entries from '@/components/Entries';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Entries',
      component: Entries,
    },
  ],
});
