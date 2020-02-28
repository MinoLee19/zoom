import Vue from 'vue';
import VueRouter from 'vue-router';

import RegAndLog from '../views/login/reg-and-log.vue';
import Login from '../views/login/login.vue';
import Reg from '../views/login/reg.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: RegAndLog,
    children: [{
      path: '/',
      component: Login,
    }, {
      path: '/login',
      name: 'Login',
      component: Login,
    }, {
      path: '/reg',
      name: 'Reg',
      component: Reg,
    }],
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
