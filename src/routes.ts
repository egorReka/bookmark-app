import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
  routes: [
    {
      path: '/:pathMatch(.*)*',
      component: () => import('./views/NotFoundView.vue'),
      name: 'NotFound'
    },
    {
      path: '/',
      component: () => import('./views/AuthView.vue'),
    },
    {
      path: '/main',
      component: () => import('./views/MainView.vue'),
      children: [
        { path: '', component: () => import('./views/IndexView.vue'), name: 'main' },
        { path: ':alias', component: () => import('./views/CategoryView.vue') }
      ],
    }
  ],
  history: createWebHistory(),
});
