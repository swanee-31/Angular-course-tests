import { Component } from '@angular/core';

@Component({
  selector: 'app-heavy-chart',
  standalone: true,
  template: `
    <div class="chart-container">
      <h3>Statistiques Détaillées</h3>
      <div class="fake-chart">
        <!-- Simulation visuelle d'un graphique pour le TP -->
        <div class="bar" style="height: 70%"></div>
        <div class="bar" style="height: 40%"></div>
        <div class="bar" style="height: 90%"></div>
        <div class="bar" style="height: 60%"></div>
      </div>
      <p>✅ Ce code JavaScript n'a été téléchargé que lorsque vous avez scrollé !</p>
    </div>
  `,
  styles: [`
    .chart-container { border: 1px solid #ccc; padding: 20px; border-radius: 8px; background: white; }
    .fake-chart { display: flex; align-items: flex-end; gap: 10px; height: 150px; border-bottom: 2px solid #333; margin-bottom: 15px; }
    .bar { width: 40px; background-color: #2196f3; transition: height 0.5s; }
  `]
})
export class HeavyChartComponent {
  // En situation réelle, on instancierait ici la logique de la librairie externe.
}