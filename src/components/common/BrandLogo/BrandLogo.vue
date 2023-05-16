<script setup lang="ts">
import BrandLogoImage from './BrandLogoImage.vue';
</script>

<template>
  <div class="brand-logo">
    <div class="brand-logo__wrapper">
      <brand-logo-image class="brand-logo__image"></brand-logo-image>
      <span class="brand-logo__text">GeoQuiz</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'assets/scss/components/common/BrandLogo';
</style>
