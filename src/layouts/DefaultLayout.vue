<template>
  <div class="default-layout">
    <header class="default-layout__header">
      <TheNavbar></TheNavbar>
    </header>
    <main class="default-layout__content">
      <slot></slot>
    </main>
    <TheFooter class="default-layout__footer"></TheFooter>
  </div>
</template>

<script setup lang="ts">
import TheNavbar from 'components/navbar/TheNavbar.vue';
import TheFooter from 'components/footer/TheFooter.vue';
</script>

<style scoped lang="scss">
@import 'assets/scss/layouts/DefaultLayout';
</style>
