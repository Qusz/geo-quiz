<script setup lang="ts">
import { useGameplayControl } from '@/stores/gameplay-control';

import VSpinner from '@/components/common/VSpinner/VSpinner.vue';
import GameInterfaceOptions from '../GameInterfaceOptions/GameInterfaceOptions.vue';
import GameInterfaceQuestion from '../GameInterfaceQuestion/GameInterfaceQuestion.vue';

const gameplayControl = useGameplayControl();
</script>

<template>
  <div class="game-interface-play">
    <div class="game-interface-play__wrapper">
      <div v-if="!gameplayControl.gameData.length" class="game-interface-play__spinner">
        <v-spinner></v-spinner>
      </div>
      <div v-else>
        <game-interface-question></game-interface-question>
        <game-interface-options></game-interface-options>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import './GameInterfacePlay.scss';
</style>
