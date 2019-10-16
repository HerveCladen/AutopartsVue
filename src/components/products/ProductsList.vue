<template>
  <div>
    <h1 class="title">Liste des produits</h1>
    <table class="table">
      <thead>
        <tr>
          <th>Code</th>
          <th>Titre</th>
          <th>Prix</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" v-bind:key="product.id">
          <td>
            {{ product.code }}
          </td>
          <td>
            {{ product.title }}
          </td>
          <td>
            {{ product.unitPrice }} $
          </td>
          <td>
            <router-link
              class="button is-primary"
              :to="{ name: 'product-edit', params: { id: product.id } }"
            >
              Editer ce produit
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'products-list',
  created() {
    this.$store.dispatch('products/request');
  },
  computed: {
    products() {
      return this.$store.state.products.list;
    },
  },
};
</script>

<style lang="scss" scoped>
  table {
    margin: 25px auto;
  }
</style>
