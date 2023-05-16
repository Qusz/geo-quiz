import type { AppState, GameMode } from '@/types';
import type { Ref } from 'vue';

import { ref } from 'vue';
import { defineStore } from 'pinia';

import Routes from 'utils/router-push';

export const useAppState = defineStore('app-state', () => {
  const state: Ref<AppState> = ref('default');
  const gameMode: Ref<GameMode> = ref(undefined);

  const routes = new Routes();

  const setToSelectMenu = () => {
    state.value = 'select-menu';
  };

  const toMenu = () => {
    setToSelectMenu();
    routes.toMainMenu();
  };

  const startGame = (mode: GameMode) => {
    if (state.value === 'play') return;
    state.value = 'play';

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
    if (state.value !== 'lose') {
      state.value = 'lose';
    }
  };

  const winGame = () => {
    if (state.value !== 'win') {
      state.value = 'win';
    }
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
    gameMode,
    setToSelectMenu,
    toMenu,
    startGame,
    winGame,
    loseGame,
    gameModeReset,
    $reset
  };
});
