<script setup lang="ts">
import { onMounted } from 'vue';

import VButton from 'components/common/VButton/VButton.vue';
import VSheet from 'components/sheet/VSheet.vue';

import { GAME_MODES } from '@/constants';
import { useAppState } from '@/stores/app-state';
import { kebabToPlain } from 'utils/kebab-to-plain';

const appState = useAppState();

onMounted(() => {
  appState.gameModeReset();

  if (appState.state !== 'select-menu') {
    appState.setToSelectMenu();
  }
});
</script>

<template>
  <div class="new-game">
    <div class="new-game__wrapper container">
      <v-sheet class="new-game__content">
        <h1 class="new-game__title">Pick your game mode</h1>
        <div class="new-game__options">
          <v-button
            v-for="(item, index) in GAME_MODES"
            :key="index"
            :tag="'button'"
            :color="'green'"
            @click="appState.startGame(item)"
          >
            {{ kebabToPlain(item!) }}
          </v-button>
        </div>
      </v-sheet>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import './NewGame';
</style>
