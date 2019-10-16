<template>
  <div v-if="productToEdit" class="container">
    <h1 class="title">Détail de produit</h1>
    <div class="field">
      <label class="label">Code</label>
      <div class="control">
        <input class="input" type="text" v-model="productToEdit.code">
      </div>
    </div>
    <div class="field">
      <label class="label">Titre</label>
      <div class="control">
        <input class="input" type="text" v-model="productToEdit.title">
      </div>
    </div>
    <div class="field">
      <label class="label">Prix</label>
      <div class="control">
        <input class="input" type="text" v-model="productToEdit.unitPrice">
      </div>
    </div>
    <div>
      <router-link class="button is-primary" :to="{ name: 'products-list' }">
        Retour
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'products-form',
  props: {
    id: {
      required: true,
    },
  },
  created() {
    this.$store.dispatch('products/request');
  },
  computed: {
    productToEdit() {
      const products = this.$store.state.products.list;
      return products.find(p => p.id === this.id);
    },
  },
};
</script>
<style lang="scss">
  .field {
    max-width: 600px;
    margin: auto;
  }
</style>
