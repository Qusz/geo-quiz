<script setup lang="ts">
import { useGameplayControl } from '@/stores/gameplay-control';
import { useAppState } from '@/stores/app-state';

import VButton from 'components/common/VButton.vue';

const appState = useAppState();
const gameplayControl = useGameplayControl();
</script>

<template>
  <div
    :class="[
      'game-interface-options',
      { 'game-interface-options--flags': appState.gameMode === 'flag-by-country' }
    ]"
  >
    <div class="game-interface-options__wrapper">
      <div v-if="appState.gameMode === 'country-by-flag'" class="game-interface-options__items">
        <v-button
          v-for="(option, index) in gameplayControl.answers"
          :key="index"
          :tag="'button'"
          :color="'green'"
          :block="true"
          class="game-interface-options__item"
          @click="gameplayControl.getUserAnswer(option)"
        >
          {{ option }}
        </v-button>
      </div>

      <div v-else class="game-interface-options__items">
        <button
          v-for="(url, index) in gameplayControl.flagUrl"
          :key="index"
          type="button"
          class="game-interface-options__item"
          @click="gameplayControl.getUserAnswer(gameplayControl.answers[index])"
        >
          <img class="game-interface-options__item-flag" :src="url" alt="flag" />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'assets/scss/components/game-interface/GameInterfaceOptions';
</style>
