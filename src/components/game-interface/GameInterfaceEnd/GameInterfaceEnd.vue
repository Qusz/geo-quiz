<script setup lang="ts">
import { useGameplayControl } from '@/stores/gameplay-control';
import { useAppState } from '@/stores/app-state';

const appState = useAppState();
const gameplayControl = useGameplayControl();
</script>

<template>
  <div class="game-interface-end">
    <div class="game-interface-end__wrapper">
      <div v-if="appState.state === 'lose'" class="game-interface-end__item">
        <p class="game-interface-end__message">You lost :/</p>

        <p
          v-if="appState.gameMode === 'country-by-flag' || appState.gameMode === 'flag-by-country'"
          class="game-interface-end__result"
        >
          Your guessed {{ gameplayControl.correctAnswers }} flags.
        </p>

        <p
          v-else-if="appState.gameMode === 'capital-by-country'"
          class="game-interface-end__result"
        >
          Your guessed {{ gameplayControl.correctAnswers }} capitals.
        </p>

        <p v-else class="game-interface-end__result">
          Your guessed {{ gameplayControl.correctAnswers }} countries.
        </p>
      </div>

      <div v-else class="game-interface-end__item">
        <p class="game-interface-end__message">Congratulations! You've guessed them all!</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import './GameInterfaceEnd';
</style>
