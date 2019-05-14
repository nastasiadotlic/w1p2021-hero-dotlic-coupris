import Vue from 'vue';
import Router from 'vue-router';

import Home from './components/Home.vue';
import Characters from './components/Characters.vue';
import Game from './components/Game.vue';
import Crossing from './components/Crossing.vue';
import Loose from './components/loose.vue';
import Win from './components/win.vue';
import Peace from './components/Peace.vue';
import Dangerous from './components/Dangerous.vue';


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
      path: '/crossing',
      name: 'crossing',
      component: Crossing,
    },
    {
      path: '/loose',
      name: 'loose',
      component: Loose,
    },
    {
      path: '/win',
      name: 'win',
      component: Win,
    },
    {
      path: '/peace',
      name: 'peace',
      component: Peace,
    },
    {
      path: '/dangerous',
      name: 'dangerous',
      component: Dangerous,
    },
    {
      path: '*',
      redirect: { name: 'home' },
    },
  ],
});

export default router;
