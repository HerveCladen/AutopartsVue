import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import ProductsList from './components/products/ProductsList.vue';
import SuppliersList from './components/suppliers/SuppliersList.vue';
import ProductEdit from './components/products/ProductsForm.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/products/list',
      component: ProductsList,
      name: 'products-list',
    },
    {
      path: '/products/edit/:id',
      name: 'product-edit',
      component: ProductEdit,
      props: true,
    },
    {
      path: '/suppliers',
      name: 'suppliers-list',
      component: SuppliersList,
    },
  ],
});
