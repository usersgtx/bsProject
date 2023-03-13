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
  // eslint-disable-next-line import/extensions
  { path: '/About', name: 'About', component: () => import('../views/About.vue'), },
  // eslint-disable-next-line import/extensions
  { path: '/Shop', name: 'Shop', component: () => import('../views/Shop.vue'), },
  // eslint-disable-next-line import/extensions
  { path: '/MyInfo', name: 'MyInfo', component: () => import('../views/MyInfo.vue'), },
  // eslint-disable-next-line import/extensions
  { path: '/ContactMe', name: 'ContactMe', component: () => import('../views/ContactMe.vue'), },
  // eslint-disable-next-line import/extensions
  { path: '/ProductDetails', name: 'ProductDetails', component: () => import('../components/ProductDetails'), },
  // eslint-disable-next-line import/extensions
  { path: '/complaintsSuggestions', name: 'complaintsSuggestions', component: () => import('../components/complaintsSuggestions'), },
  { path: '/ProductDetails', name: 'ProductDetails', component: () => import('../components/ProductDetails'), },
  // eslint-disable-next-line import/extensions
  { path: '/AllOrders', name: 'AllOrders', component: () => import('../components/AllOrders'), },
  { path: '*', redirect: '/Home' },
];

const router = new VueRouter({
  routes,
});

export default router;
