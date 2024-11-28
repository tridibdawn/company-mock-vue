import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history', // Use history mode to have clean URLs
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      // Lazy-load the component when the route is visited
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  ]
});
