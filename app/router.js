import Vue from 'vue';
import Router from 'vue-router';

import Home from './components/Home.vue';
import Game from './components/Game.vue';



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
