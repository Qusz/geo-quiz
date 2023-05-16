<script setup lang="ts">
import type { NavbarItemType } from '@/types';
import { useAppState } from '@/stores/app-state';
import NavbarItem from './NavbarItem.vue';

const appState = useAppState();

const navbarItems: NavbarItemType[] = [
  {
    name: 'New Game',
    tag: 'div',
    buttonColor: 'green',
    action: () => appState.toMenu()
  }
];
</script>

<template>
  <ul class="navbar-items">
    <navbar-item
      v-for="(item, index) in navbarItems"
      :key="index"
      :page-name="item.route"
      :button-tag="item.tag"
      :button-color="item.buttonColor"
      :button-shape="item.buttonShape"
      @click="item.action && item.action()"
    >
      {{ item.name }}
    </navbar-item>
  </ul>
</template>

<style scoped lang="scss">
@import 'assets/scss/components/navbar/NavbarItems';
</style>
