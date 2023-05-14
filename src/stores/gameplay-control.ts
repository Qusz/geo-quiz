import type { Ref } from 'vue';
import type { RestCountriesSorted } from '@/types';

import { ref } from 'vue';
import { defineStore } from 'pinia';

import { useGameData } from '@/composables/useGameData';

import ArrayControl from '@/utils/array-control';

export const useGameplayControl = defineStore('gameplay-control', () => {
  let currentCountryIndex: number;
  const amountOfOptions = 4;

  type AnswerState = 'initial' | 'correct' | 'incorrect' | undefined;

  const gameData: Ref<RestCountriesSorted[]> = ref([]);
  const usedCountries: Ref<number[]> = ref([]);
  const question: Ref<string> = ref('');
  const answers: Ref<string[]> = ref([]);
  const flagUrl: Ref<string> = ref('');

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
    // Get correct answer
    answers.value.push(question.value);

    // Get 3 incorrect asnwers
    while (answers.value.length < amountOfOptions) {
      const randomIndex = ArrayControl.getRandomIndex(gameData.value);

      switch (true) {
        case answers.value.includes(gameData.value[randomIndex].name):
        case randomIndex === currentCountryIndex:
          break;
        default:
          answers.value.push(gameData.value[randomIndex].name);
          break;
      }
    }

    answers.value = ArrayControl.shuffleArray(answers.value);
  };

  const getData = async () => {
    gameData.value = (await useGameData()).data;
  };

  const initAnswerState = () => {
    if (answerState.value !== 'initial') {
      answerState.value = 'initial';
    }
  };

  const nextQuestion = () => {
    initAnswerState();
    _getCountry();
    _getAnswers();

    flagUrl.value = gameData.value[currentCountryIndex].flag;
  };

  const getUserAnswer = (input: string) => {
    userAnswer.value = input;
  };

  const validateUserAnswer = () => {
    if (userAnswer.value === question.value) {
      answerState.value = 'correct';
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
    flagUrl.value = '';
    userAnswer.value = '';
  };

  const $reset = () => {
    gameData.value = [];
    usedCountries.value = [];
    answerState.value = undefined;
    question.value = '';
    answers.value = [];
    correctAnswers.value = 0;
    flagUrl.value = '';
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
