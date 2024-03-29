import TheDashboardView from '@/views/TheDashboardView.vue';
import TheLoginPage from '@/views/TheLoginPage.vue';
import TheHomeView from '../views/TheHomeView.vue';

export default [
  {
    path: '/',
    name: 'home',
    component: TheHomeView,
  },
  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: TheDashboardView,
    meta: { requiresAuth: true },
  },
  {
    path: '/Login',
    name: 'Login',
    component: TheLoginPage,
  },
];
