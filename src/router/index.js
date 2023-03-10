import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  // eslint-disable-next-line import/extensions
  { path: '/Home', name: 'Home', component: () => import('../views/Home.vue'), },
  // eslint-disable-next-line import/extensions
  { path: '/Vip', name: 'Vip', component: () => import('../views/Vip.vue'), },
  // eslint-disable-next-line import/extensions
  { path: '/PaymentSucceeded', name: 'PaymentSucceeded', component: () => import('../views/PaymentSucceeded.vue'), },
  { path: '*', redirect: '/Home' },
];

const router = new VueRouter({
  routes,
});

export default router;
