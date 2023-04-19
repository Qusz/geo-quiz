<script setup lang="ts">
import { onMounted, watch } from 'vue';

import VButton from 'components/common/VButton.vue';
import VSheet from 'components/sheet/VSheet.vue';

import { storeToRefs } from 'pinia';
import { useGameState } from 'stores/game-state';
import { useGameMode } from 'stores/game-mode';

const gameState = useGameState();
const gameModeState = useGameMode();

const { gameMode } = storeToRefs(gameModeState);

onMounted(() => {
  gameState.$reset();
});

watch(gameMode, () => {
  gameState.startGame();
});
</script>

<template>
  <div class="new-game">
    <div class="new-game__wrapper container">
      <v-sheet class="new-game__content">
        <h1 class="new-game__title">Pick your game mode</h1>
        <div class="new-game__options">
          <v-button :tag="'button'" :color="'green'" @click="gameModeState.playFlagByCountry">
            Flag by country
          </v-button>
          <v-button :tag="'button'" :color="'green'" @click="gameModeState.playCountryByFlag">
            Country by flag
          </v-button>
          <v-button :tag="'button'" :color="'green'" @click="gameModeState.playCapitalByCountry">
            Capital by country
          </v-button>
          <v-button :tag="'button'" :color="'green'" @click="gameModeState.playCountryByCapital">
            Country by capital
          </v-button>
        </div>
      </v-sheet>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'assets/scss/views/NewGame';
</style>
