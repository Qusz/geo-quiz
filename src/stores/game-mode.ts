import type { GameMode } from '@/types';
import type { Ref } from 'vue';

import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useGameMode = defineStore('gameMode', () => {
  const gameMode: Ref<GameMode> = ref(undefined);

  const playFlagByCountry = () => {
    gameMode.value = 'flag-by-country';
  };

  const playCountryByFlag = () => {
    gameMode.value = 'country-by-flag';
  };

  const playCapitalByCountry = () => {
    gameMode.value = 'capital-by-country';
  };

  const playCountryByCapital = () => {
    gameMode.value = 'country-by-capital';
  };

  return {
    gameMode,
    playCapitalByCountry,
    playCountryByCapital,
    playCountryByFlag,
    playFlagByCountry
  };
});
