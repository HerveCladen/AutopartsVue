import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import ProductsList from './components/products/ProductsList.vue';
import SuppliersList from './components/suppliers/SuppliersList.vue';
import ProductEdit from './components/products/ProductsForm.vue';
import SupplierEdit from './components/suppliers/SuppliersForm.vue';

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
      name: 'products-list',
      component: ProductsList,
    },
    {
      path: '/products/edit/:id',
      name: 'product-edit',
      component: ProductEdit,
      props: true,
    },
    {
      path: '/suppliers/list',
      name: 'suppliers-list',
      component: SuppliersList,
    },
    {
      path: '/suppliers/edit/:id',
      name: 'supplier-edit',
      component: SupplierEdit,
      props: true,
    },
  ],
});
