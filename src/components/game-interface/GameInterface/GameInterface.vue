<script setup lang="ts">
import { shallowRef, onMounted, onUnmounted, watch } from 'vue';

import { storeToRefs } from 'pinia';
import { useGameplayControl } from '@/stores/gameplay-control';
import { useAppState } from '@/stores/app-state';

import VSheet from 'components/sheet/VSheet.vue';
import GameInterfaceEnd from '../GameInterfaceEnd/GameInterfaceEnd.vue';
import GameInterfacePlay from '../GameInterfacePlay/GameInterfacePlay.vue';

const currentView = shallowRef(GameInterfacePlay);

const appState = useAppState();
const gameplayControl = useGameplayControl();

const { gameData, userAnswer, answerState } = storeToRefs(gameplayControl);

const handleCorrectAnswer = () => {
  if (gameplayControl.usedCountries.length === gameData.value.length) {
    appState.winGame();
    currentView.value = GameInterfaceEnd;
  } else {
    gameplayControl.increaseCorrectAnswersCounter();
    gameplayControl.$partialReset();
    gameplayControl.initAnswerState();
  }
};

const handleIncorrectAnswer = () => {
  appState.loseGame();
  currentView.value = GameInterfaceEnd;
};

onMounted(() => {
  gameplayControl.getData();
});

onUnmounted(() => {
  gameplayControl.$reset();
});

watch(gameData, () => {
  gameplayControl.initAnswerState();
});

watch(userAnswer, () => {
  if (!userAnswer.value) return;
  gameplayControl.validateUserAnswer();
});

watch(answerState, () => {
  if (!gameplayControl.gameData) return;

  switch (answerState.value) {
    case 'initial':
      gameplayControl.nextQuestion(appState.gameMode);
      break;
    case 'correct':
      handleCorrectAnswer();
      break;
    case 'incorrect':
      handleIncorrectAnswer();
      break;
    default:
      throw new Error('Unexpected answer state value');
  }
});
</script>

<template>
  <div class="game-interface">
    <div class="game-interface__wrapper">
      <v-sheet class="game-interface__content">
        <component :is="currentView"></component>
      </v-sheet>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import './GameInterface';
</style>
