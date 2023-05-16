import type { AppState, GameMode } from '@/types';
import type { Ref } from 'vue';

import { ref } from 'vue';
import { defineStore } from 'pinia';

import Routes from 'utils/router-push';

export const useAppState = defineStore('app-state', () => {
  const state: Ref<AppState> = ref('default');
  const gameMode: Ref<GameMode> = ref(undefined);

  const routes = new Routes();

  const changeStateTo = (value: AppState) => {
    if (state.value !== value) {
      state.value = value;
    }
  };

  const toMenu = () => {
    changeStateTo('select-menu');
    routes.toMainMenu();
  };

  const startGame = (mode: GameMode) => {
    changeStateTo('play');

    try {
      switch (mode) {
        case 'flag-by-country':
          gameMode.value = 'flag-by-country';
          break;
        case 'country-by-flag':
          gameMode.value = 'country-by-flag';
          break;
        case undefined:
          break;
        default:
          throw new Error(`Unexpected value of gameMode: ${gameMode.value}`);
      }
    } catch (error) {
      // TODO add error handling
      console.log(error);
    }

    routes.toPlay();
  };

  const loseGame = () => {
    changeStateTo('lose');
  };

  const winGame = () => {
    changeStateTo('win');
  };

  const gameModeReset = () => {
    gameMode.value = undefined;
  };

  const $reset = () => {
    state.value = 'default';
    gameModeReset();
  };

  return {
    state,
    changeStateTo,
    gameMode,
    toMenu,
    startGame,
    winGame,
    loseGame,
    gameModeReset,
    $reset
  };
});
