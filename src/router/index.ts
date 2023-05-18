import { createRouter, createWebHistory } from 'vue-router';

import HomeView from 'views/HomeView/HomeView.vue';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/new-game',
      name: 'NewGame',
      component: () => import('views/NewGame/NewGame.vue')
    },
    {
      path: '/play',
      name: 'PlayGame',
      component: () => import('views/PlayGame/PlayGame.vue'),
      beforeEnter: (to, from) => {
        if (from.path !== '/new-game') {
          router.push('/new-game');
        }
      }
    }
  ]
});

export default router;
