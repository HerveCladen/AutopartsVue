<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a role="button" class="navbar-burger burger"
      aria-label="menu" aria-expanded="false" data-target="nav"
      @click="showNav = !showNav" :class="{ 'is-active': showNav }">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="nav" class="navbar-menu" :class="{ 'is-active': showNav }">
      <div class="navbar-start">
        <router-link class="navbar-item" to="/">
          Home
        </router-link>
        <router-link class="navbar-item" to="/suppliers/list">
          Fournisseurs
        </router-link>
        <router-link class="navbar-item" to="/products/list">
          Produits
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'app-navigation',
  data() {
    return {
      showNav: false,
    };
  },
};
</script>

<style scoped lang="scss">
</style>
