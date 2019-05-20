import Vue from 'vue';
import Router from 'vue-router';

import Home from './components/Home/Home.vue';
import Game from './components/Game.vue';
import Loose1 from './components/Loose/loose1.vue';



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
      path: '/game/:id',
      name: 'game',
      component: Game,
    },
    {
      path: '/loose1',
      name: 'loose1',
      component: Loose1,
    },
    {
      path: '*',
      redirect: { name: 'home' },
    },
  ],
});

export default router;
