import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history", // Use history mode to have clean URLs
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/employees",
      name: "Employees",
      // Lazy-load the component when the route is visited
      component: () =>
        import(/* webpackChunkName: "employees" */ "../views/Employees.vue"),
    },
    {
      path: "/companies",
      name: "Companies",
      component: () =>
        import(/* webpackChunkName: "companies" */ "../views/Companies.vue"),
    },
    {
        path: '/company/:id', // Dynamic route for company details
        name: 'CompanyDetails',
        component: () =>
            import(/* webpackChunkName: "company details" */ "../views/CompanyDetails.vue"),
        props: true
      }
  ],
});
