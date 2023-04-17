<script setup lang="ts">
import type { NavbarItemType } from '@/types';
import NavbarItem from './NavbarItem.vue';

const navbarItems: NavbarItemType[] = [
  {
    name: 'New Game',
    route: 'NewGame',
    tag: 'div',
    buttonColor: 'green'
  },
  {
    name: 'Your Stats',
    route: 'PlayerStats',
    tag: 'div',
    buttonShape: 'plain'
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
    >
      {{ item.name }}
    </navbar-item>
  </ul>
</template>

<style scoped lang="scss">
@import 'assets/scss/components/navbar/NavbarItems';
</style>
