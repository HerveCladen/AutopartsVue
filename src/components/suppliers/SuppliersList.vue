<template>
  <div>
    <h1 class="title">Liste des fournisseurs</h1>
    <table class="table">
      <thead>
        <tr>
          <th>Nom</th>
          <th>Téléphone</th>
          <th>Contact</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="supplier in suppliers" v-bind:key="supplier.id">
          <td>
            {{ supplier.name }}
          </td>
          <td>
            {{ supplier.telephone }}
          </td>
          <td>
            {{ supplier.contact }} $
          </td>
          <td>
            <router-link
              class="button is-primary"
              :to="{ name: 'supplier-edit', params: { id: supplier.id } }"
            >
              Editer ce fournisseur
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'suppliers-list',
  created() {
    this.$store.dispatch('suppliers/request');
  },
  computed: {
    suppliers() {
      return this.$store.state.suppliers.list;
    },
  },
};
</script>

<style lang="scss" scoped>
  table {
    margin: 25px auto;
  }
</style>
