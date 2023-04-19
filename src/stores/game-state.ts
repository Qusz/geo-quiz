import type { GameState } from '@/types';
import type { Ref } from 'vue';

import { ref } from 'vue';
import { defineStore } from 'pinia';

import Routes from 'utils/router-push';
import { useGameMode } from './game-mode';

export const useGameState = defineStore('gameState', () => {
  const gameState: Ref<GameState> = ref('default');

  const gameMode = useGameMode();
  const routes = new Routes();

  const toMenu = () => {
    gameState.value = 'select-menu';
    routes.toMainMenu();
  };

  const startGame = () => {
    gameState.value = 'play';

    try {
      switch (gameMode.$state.gameMode) {
        case 'flag-by-country':
          routes.toFlagByCountry();
          break;
        case 'country-by-flag':
          routes.toCountryByFlag();
          break;
        case 'capital-by-country':
          routes.toCapitalByCountry();
          break;
        case 'country-by-capital':
          routes.toCountryByCapital();
          break;
        default:
          throw new Error(`Unexpected value of gameMode: ${gameMode.$state.gameMode}`);
      }
    } catch (error) {
      // TODO add error handling
      console.log(error);
    }
  };

  const finishGame = () => {
    gameState.value = 'game-over';
  };

  return {
    gameState,
    toMenu,
    startGame,
    finishGame
  };
});
