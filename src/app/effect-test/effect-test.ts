import { isPlatformBrowser } from '@angular/common';
import { afterNextRender, Component, effect, inject, PLATFORM_ID, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-effect-test',
  standalone: true,
  styleUrl: './effect-test.css',
  templateUrl: './effect-test.html',
})
export class EffectTest {
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly initialized = signal(false);
  isDarkMode = signal(false);

  constructor() {
    afterNextRender(() => {
      this.isDarkMode.set(localStorage.getItem('theme') === 'dark');
      this.initialized.set(true);
    });

    // On déclare l'effet dans le constructeur (contexte d'injection)
    effect(() => {
      // 1. Angular voit qu'on lit this.isDarkMode() ici.
      const dark = this.isDarkMode();

      if (!this.isBrowser || !this.initialized()) {
        return;
      }

      // 2. Ce code s'exécutera à chaque fois que isDarkMode change.
      console.log('Le thème a changé. Nouveau statut sombre :', dark);

      // 3. Effet de bord (Interaction avec une API du navigateur)
      if (dark) {
        localStorage.setItem('theme', 'dark');
        document.body.classList.add('dark-mode');
      } else {
        localStorage.setItem('theme', 'light');
        document.body.classList.remove('dark-mode');
      }
    });
  }

  toggleTheme() {
    this.isDarkMode.update(current => !current);
  }
}
