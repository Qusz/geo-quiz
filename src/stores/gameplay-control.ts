import type { Ref } from 'vue';
import type { RestCountriesSorted, AnswerState, GameMode } from '@/types';

import { ref } from 'vue';
import { defineStore } from 'pinia';

import { toast } from 'vue3-toastify';

import { useGameData } from '@/composables/useGameData';

import ArrayControl from '@/utils/array-control';

export const useGameplayControl = defineStore('gameplay-control', () => {
  let currentCountryIndex: number;
  const amountOfOptions = 4;

  const gameData: Ref<RestCountriesSorted[]> = ref([]);
  const usedCountries: Ref<number[]> = ref([]);
  const question: Ref<string> = ref('');
  const answers: Ref<string[]> = ref([]);
  const flagUrl: Ref<string[]> = ref([]);

  const answerState: Ref<AnswerState> = ref(undefined);
  const userAnswer: Ref<string> = ref('');
  const correctAnswers: Ref<number> = ref(0);

  const _getCountry = () => {
    currentCountryIndex = ArrayControl.getRandomIndex(gameData.value);

    if (usedCountries.value.includes(currentCountryIndex)) {
      _getCountry();
    } else {
      usedCountries.value.push(currentCountryIndex);
      question.value = gameData.value[currentCountryIndex].name;
    }
  };

  const _getAnswers = () => {
    answers.value.push(question.value);

    while (answers.value.length < amountOfOptions) {
      const randomIndex = ArrayControl.getRandomIndex(gameData.value);
      const currentAnswer = gameData.value[randomIndex].name;

      if (!answers.value.includes(currentAnswer) && randomIndex !== currentCountryIndex) {
        answers.value.push(currentAnswer);
      }
    }

    answers.value = ArrayControl.shuffleArray(answers.value);
  };

  const getData = async () => {
    try {
      gameData.value = (await useGameData()).data;
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error('Something went wrong...');
      }
    }
  };

  const initAnswerState = () => {
    if (answerState.value !== 'initial') {
      answerState.value = 'initial';
    }
  };

  const nextQuestion = (gameMode: GameMode) => {
    initAnswerState();
    _getCountry();
    _getAnswers();

    if (gameMode === 'country-by-flag') {
      flagUrl.value.push(gameData.value[currentCountryIndex].flag);
    } else {
      answers.value.forEach((item) => {
        const itemIndex = gameData.value.findIndex((country) => country.name === item);

        flagUrl.value.push(gameData.value[itemIndex].flag);
      });
    }
  };

  const getUserAnswer = (input: string) => {
    userAnswer.value = input;
  };

  const validateUserAnswer = () => {
    if (userAnswer.value === question.value) {
      answerState.value = 'correct';
      toast.success('Correct!', { autoClose: 300 });
    } else {
      answerState.value = 'incorrect';
    }
  };

  const increaseCorrectAnswersCounter = () => {
    correctAnswers.value++;
  };

  const $partialReset = () => {
    answerState.value = undefined;
    question.value = '';
    answers.value = [];
    flagUrl.value = [];
    userAnswer.value = '';
  };

  const $reset = () => {
    gameData.value = [];
    usedCountries.value = [];
    answerState.value = undefined;
    question.value = '';
    answers.value = [];
    correctAnswers.value = 0;
    flagUrl.value = [];
    userAnswer.value = '';
  };

  return {
    answerState,
    gameData,
    usedCountries,
    question,
    answers,
    flagUrl,
    userAnswer,
    correctAnswers,
    getData,
    nextQuestion,
    getUserAnswer,
    validateUserAnswer,
    initAnswerState,
    increaseCorrectAnswersCounter,
    $partialReset,
    $reset
  };
});
