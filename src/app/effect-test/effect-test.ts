import { Component, effect, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-effect-test',
  standalone: true,
  styleUrl: './effect-test.css',
  templateUrl: './effect-test.html',
})
export class EffectTest {
  // On initialise le signal en lisant le localStorage (ou faux par défaut)
  isDarkMode = signal(localStorage.getItem('theme') === 'dark');

  constructor() {
    // On déclare l'effet dans le constructeur (contexte d'injection)
    effect(() => {
      // 1. Angular voit qu'on lit this.isDarkMode() ici.
      const dark = this.isDarkMode();
      
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
