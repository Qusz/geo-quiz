import { useRouter } from 'vue-router';
import type { Router } from 'vue-router';

export default class Routes {
  router: Router;

  constructor() {
    this.router = useRouter();
  }

  toHome() {
    this.router.push('/');
  }

  toMainMenu() {
    this.router.push('new-game');
  }

  toCapitalByCountry() {
    this.router.push('capitbal-by-coutry');
  }

  toCountryByCapital() {
    this.router.push('country-by-capital');
  }

  toCountryByFlag() {
    this.router.push('country-by-flag');
  }

  toFlagByCountry() {
    this.router.push('flag-by-country');
  }

  toStats() {
    this.router.push('stats');
  }
}
