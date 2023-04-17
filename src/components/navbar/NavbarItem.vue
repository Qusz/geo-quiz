<script setup lang="ts">
import { RouterLink } from 'vue-router';
import VButton from 'components/common/VButton.vue';

import type { ButtonColor, ButtonTag, ButtonShape, ButtonType } from '@/types';

const props = defineProps<{
  // TODO create a type for router links
  pageName: string;
  buttonTag: ButtonTag;
  buttonColor?: ButtonColor;
  buttonShape?: ButtonShape;
  buttonType?: ButtonType;
}>();
</script>

<template>
  <li class="navbar-item">
    <router-link :to="{ name: pageName }">
      <v-button :tag="buttonTag" :color="buttonColor" :shape="buttonShape">
        <slot></slot>
      </v-button>
    </router-link>
  </li>
</template>

<style scoped lang="scss">
@import 'assets/scss/components/navbar/NavbarItem';
</style>
