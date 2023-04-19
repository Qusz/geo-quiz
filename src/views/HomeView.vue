<script setup lang="ts">
import VSheet from 'components/sheet/VSheet.vue';
import VButton from 'components/common/VButton.vue';
import ListItem from 'components/common/ListItem.vue';

import { useGameState } from 'stores/game-state';

const gameState = useGameState();

const listItems = [
  'Flag by country',
  'Country by flag',
  'Capital by country',
  'Country by capital'
];
</script>

<template>
  <div class="home">
    <div class="home__wrapper container">
      <v-sheet class="home__content">
        <h1 class="home__title">Welcome to GeoQuiz!</h1>
        <div class="home__text-block">
          <p class="home__text-block-paragraph">
            Test your geography knowledge in four different game modes:
          </p>

          <ul class="home__text-block-list">
            <list-item v-for="(item, index) in listItems" :key="index" :tag="'li'">
              {{ item }}
            </list-item>
          </ul>
        </div>

        <v-button
          class="home__play-button"
          :tag="'button'"
          :type="'button'"
          :color="'green'"
          @click="() => gameState.toMenu()"
        >
          Play
        </v-button>
      </v-sheet>
    </div>
  </div>
</template>

<style scope lang="scss">
@import 'assets/scss/views/HomeView';
</style>
