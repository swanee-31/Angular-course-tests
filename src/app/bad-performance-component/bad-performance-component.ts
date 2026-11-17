import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bad-performance',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="card">
      <h2>Mon Panier</h2>
      
      <!-- Champ de saisie tout simple -->
      <label>Votre prénom : </label>
      <input [(ngModel)]="userName" placeholder="Tapez votre nom..." />
      <p>Bonjour {{ userName }}</p>

      <!-- Affichage du total -->
      <h3>Total à payer : {{ calculateTotal() }} €</h3>
    </div>
  `
})
export class BadPerformanceComponent {
  userName = '';
  items = signal([{ price: 10 }, { price: 25 }, { price: 40 }]);

  // Une fonction lourde appelée directement dans le HTML
  calculateTotal(): number {
    console.warn("Calcul lourd en cours...");
    // Simulation d'une opération très lente (bloque le thread pendant 10ms)
    const start = performance.now();
    while(performance.now() - start < 10) {} 
    
    return this.items().reduce((acc, item) => acc + item.price, 0);
  }
}