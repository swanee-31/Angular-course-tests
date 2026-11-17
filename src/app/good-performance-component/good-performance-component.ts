import { Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-good-performance',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="card">
      <h2>Mon Panier</h2>
      
      <!-- Liaison de données réactive avec un Signal -->
      <label>Votre prénom : </label>
      <input 
        [ngModel]="userName()" 
        (ngModelChange)="userName.set($event)" 
        placeholder="Tapez votre nom..." 
      />
      <p>Bonjour {{ userName() }}</p>

      <!-- Affichage du total via l'état dérivé -->
      <h3>Total à payer : {{ total() }} €</h3>
    </div>
  `,
  styles: [`
    .card { padding: 20px; border: 2px solid #4caf50; border-radius: 8px; max-width: 400px; font-family: sans-serif; }
    input { margin-left: 10px; padding: 5px; }
  `]
})
export class GoodPerformanceComponent {
  // Les états sont désormais 100% réactifs (Signals)
  userName = signal('');
  items = signal([{ price: 10 }, { price: 25 }, { price: 40 }]);

  // L'état dérivé (computed) met le résultat en cache.
  // Il ne se recalculera QUE si 'items' est modifié.
  // Taper dans l'input ne déclenche plus ce calcul !
  total = computed(() => {
    console.warn("Calcul lourd effectué une seule fois !");
    
    // Simulation d'une opération très lente (bloque le thread pendant 10ms)
    const start = performance.now();
    while(performance.now() - start < 10) {} 
    
    return this.items().reduce((acc, item) => acc + item.price, 0);
  });
}