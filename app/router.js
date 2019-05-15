import Vue from 'vue';
import Router from 'vue-router';

import Home from './components/Home.vue';
import Characters from './components/Characters.vue';



Vue.use(Router);

const router = new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/characters',
      name: 'characters',
      component: Characters,
    },
    {
      path: '/game',
      name: 'game',
      component: Game,
    },
    {
      path: '*',
      redirect: { name: 'home' },
    },
  ],
});

export default router;
