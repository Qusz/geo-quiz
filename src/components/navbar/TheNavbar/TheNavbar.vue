<script setup lang="ts">
import BrandLogo from 'components/common/BrandLogo.vue';
import NavbarItems from './NavbarItems.vue';
</script>

<template>
  <nav class="navbar">
    <div class="navbar__wrapper container">
      <router-link :to="{ name: 'Home' }">
        <brand-logo class="navbar__logo"></brand-logo>
      </router-link>
      <navbar-items></navbar-items>
    </div>
  </nav>
</template>

<style scoped lang="scss">
@import 'assets/scss/components/navbar/TheNavbar';
</style>
