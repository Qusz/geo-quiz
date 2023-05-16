<script setup lang="ts">
const props = defineProps<{
  fluid?: boolean;
}>();
</script>

<template>
  <div :class="['sheet', { 'sheet--fluid': fluid }]">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
@import './VSheet';
</style>
