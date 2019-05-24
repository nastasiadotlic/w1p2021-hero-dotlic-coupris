import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home/Home.vue';
import Game from './components/Game.vue';
import Loose1 from './components/Loose/loose1.vue';
import Loose2 from '../app/components/Loose/loose2.vue';
import Loose3 from './components/Loose/loose3.vue';
import Loose4 from './components/Loose/loose4.vue';
import Loose5 from './components/Loose/loose5.vue';
import Loose6 from './components/Loose/loose6.vue';
import Loose7 from './components/Loose/loose7.vue';
import Loose8 from './components/Loose/loose8.vue';
import Win from './components/win.vue';



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
      path: '/loose2',
      name: 'loose2',
      component: Loose2,
    },
    {
      path: '/loose3',
      name: 'loose3',
      component: Loose3,
    },
    {
      path: '/loose4',
      name: 'loose4',
      component: Loose4,
    },
    {
      path: '/loose5',
      name: 'loose5',
      component: Loose5,
    },
    {
      path: '/loose6',
      name: 'loose6',
      component: Loose6,
    },
    {
      path: '/loose7',
      name: 'loose7',
      component: Loose7,
    },
    {
      path: '/loose8',
      name: 'loose8',
      component: Loose8,
    },
    {
      path: '/win',
      name: 'win',
      component: Win,
    },
    {
      path: '*',
      redirect: { name: 'home' },
    },
  ],
});

export default router;
