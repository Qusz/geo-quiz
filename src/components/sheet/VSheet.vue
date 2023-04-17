<script setup lang="ts">
const props = defineProps<{
  fluid?: boolean;
}>();
</script>

<template>
  <div :class="['sheet', { 'sheet--fluid': fluid }]">
    <div class="sheet__wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'assets/scss/components/sheet/VSheet';
</style>
