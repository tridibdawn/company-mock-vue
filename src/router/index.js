import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history", // Use history mode to have clean URLs
  routes: [
    {
      path: "/",
      name: "Companies",
      component: () =>
        import(/* webpackChunkName: "companies" */ "../views/Companies.vue"),
    },
    {
        path: '/:id', // Dynamic route for company details
        name: 'CompanyDetails',
        component: () =>
            import(/* webpackChunkName: "company details" */ "../views/CompanyDetails.vue"),
        props: true
      }
  ],
});
