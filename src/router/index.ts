import { createRouter, createWebHistory } from 'vue-router';

import HomeView from 'views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/new-game',
      name: 'NewGame',
      component: () => import('views/NewGame.vue')
    },
    {
      path: '/capitbal-by-coutry',
      name: 'CapitalByCountry',
      component: () => import('views/CapitalByCountry.vue')
    },
    {
      path: '/country-by-capital',
      name: 'CountryByCapital',
      component: () => import('views/CountryByCapital.vue')
    },
    {
      path: '/country-by-flag',
      name: 'CountryByFlag',
      component: () => import('views/CountryByFlag.vue')
    },
    {
      path: '/flag-by-country',
      name: 'FlagByCountry',
      component: () => import('views/FlagByCountry.vue')
    },
    {
      path: '/stats',
      name: 'PlayerStats',
      component: () => import('views/PlayerStats.vue')
    }
  ]
});

export default router;
