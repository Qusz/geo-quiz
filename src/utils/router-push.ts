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
}
