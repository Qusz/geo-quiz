<script setup lang="ts">
import type { ButtonColor, ButtonShape, ButtonType, ButtonTag } from '@/types';

const props = defineProps<{
  tag: ButtonTag;
  color?: ButtonColor;
  shape?: ButtonShape;
  type?: ButtonType;
  block?: boolean;
}>();
</script>

<template>
  <component
    :is="tag"
    :class="[
      'button',
      {
        'button--green': color === 'green',
        'button--white': color === 'white',
        'button--sienna': color === 'sienna',
        'button--plain': shape === 'plain',
        'button--block': block === true
      }
    ]"
    :type="type"
  >
    <div class="button__wrapper">
      <slot></slot>
    </div>
  </component>
</template>

<style scoped lang="scss">
@import 'assets/scss/components/common/VButton';
</style>
