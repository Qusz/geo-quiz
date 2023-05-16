<script setup lang="ts">
import { onMounted } from 'vue';

import VSheet from 'components/sheet/VSheet.vue';
import VButton from 'components/common/VButton/VButton.vue';
import ListItem from 'components/common/ListItem/ListItem.vue';

import { GAME_MODES } from '@/constants';
import { useAppState } from '@/stores/app-state';

const appState = useAppState();

onMounted(() => {
  appState.$reset();
});
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
            <list-item v-for="(item, index) in GAME_MODES" :key="index" :tag="'li'">
              {{ item }}
            </list-item>
          </ul>
        </div>

        <v-button
          class="home__play-button"
          :tag="'button'"
          :type="'button'"
          :color="'green'"
          @click="() => appState.toMenu()"
        >
          Play
        </v-button>
      </v-sheet>
    </div>
  </div>
</template>

<style scope lang="scss">
@import './HomeView';
</style>
