<script setup lang="ts">
import { useAppState } from '@/stores/app-state';
import { useGameplayControl } from '@/stores/gameplay-control';

const appState = useAppState();
const gameplayControl = useGameplayControl();
</script>

<template>
  <div class="game-interface-question">
    <div v-if="appState.gameMode === 'flag-by-country'" class="game-interface-question__text">
      <p>Which one is the flag of {{ gameplayControl.question }}?</p>
    </div>

    <div v-else class="game-interface-question__flag">
      <img :src="gameplayControl.flagUrl[0]" alt="flag" class="game-interface-question__flag-img" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import './GameInterfaceQuestion';
</style>
