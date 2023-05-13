import type { RestCountries, RestCountriesSorted } from '@/types';

export const useGameData = async () => {
  const REST_COUNTRIES = 'https://restcountries.com/v3.1/all';
  let data: RestCountries[] | RestCountriesSorted[];

  const _filterData = (countries: RestCountries[]) => {
    const independentCountries = countries.filter((item) => item.independent);
    const filteredData: RestCountriesSorted[] = independentCountries.map((item) => ({
      name: item.name.common,
      capital: item.capital,
      continents: item.continents,
      flag: item.flags.png
    }));

    return filteredData;
  };

  try {
    const request = await fetch(REST_COUNTRIES);
    const response: RestCountries[] = await request.json();

    data = _filterData(response);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw error;
  }

  return { data };
};
