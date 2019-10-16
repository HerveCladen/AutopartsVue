<template>
  <div v-if="supplierToEdit">
    <div class="field">
      <label class="label">Nom</label>
      <div class="control">
        <input class="input" type="text" v-model="supplierToEdit.name">
      </div>
    </div>
    <div class="field">
      <label class="label">Téléphone</label>
      <div class="control">
        <input class="input" type="text" v-model="supplierToEdit.telephone">
      </div>
    </div>
    <div class="field">
      <label class="label">Contact</label>
      <div class="control">
        <input class="input" type="text" v-model="supplierToEdit.contact">
      </div>
    </div>
    <div>
      <router-link class="button is-primary" :to="{ name: 'suppliers-list' }">
        Retour
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'suppliers-form',
  props: {
    id: {
      required: true,
    },
  },
  created() {
    this.$store.dispatch('suppliers/request');
  },
  computed: {
    supplierToEdit() {
      const suppliers = this.$store.state.suppliers.list;
      return suppliers.find(p => p.id === this.id);
    },
  },
};
</script>
