<script setup lang="ts">
import type { ListItemTag } from '@/types';

const props = defineProps<{
  tag: ListItemTag;
}>();
</script>

<template>
  <component :is="tag" class="list-item">
    <slot></slot>
  </component>
</template>

<style scoped lang="scss">
@import './ListItem';
</style>
