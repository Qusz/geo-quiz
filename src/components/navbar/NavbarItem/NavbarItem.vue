<script setup lang="ts">
import VButton from 'components/common/VButton/VButton.vue';

import type { ButtonColor, ButtonTag, ButtonShape, ButtonType } from '@/types';

const props = defineProps<{
  buttonTag: ButtonTag;
  buttonColor?: ButtonColor;
  buttonShape?: ButtonShape;
  buttonType?: ButtonType;
}>();
</script>

<template>
  <li class="navbar-item">
    <v-button :tag="buttonTag" :color="buttonColor" :shape="buttonShape" :type="buttonType">
      <slot></slot>
    </v-button>
  </li>
</template>

<style scoped lang="scss"></style>
