import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/Login.vue';
import HomeSpace from './views/HomeSpace.vue';
import PageStructure from './views/PageStructure.vue';

Vue.use(Router);

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'homeSpace',
      component: HomeSpace,
      children: [{
        path: 'structure',
        name: 'structure',
        component: PageStructure
      }]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
  ],
});
