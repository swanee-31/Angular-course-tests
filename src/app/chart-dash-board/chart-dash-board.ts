import { Component } from '@angular/core';
import { HeavyChartComponent } from '../heavy-chart/heavy-chart';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HeavyChartComponent, FormsModule], // Obligatoire, le compilateur Angular gère la séparation du code
  template: `
    <div class="dashboard">
      <h2>Tableau de bord</h2>
      
      <p>Ces éléments sont critiques (LCP) et sont chargés immédiatement.</p>
      
      <!-- Espace vide géant pour forcer le scroll lors de la démonstration -->
      <div class="spacer">
        Faites défiler la page vers le bas... 👇
      </div>

      <!-- LA ZONE DE LAZY LOADING -->
      @defer (on viewport) {
        <app-heavy-chart></app-heavy-chart>
      } 
      @placeholder {
        <!-- Affiché immédiatement à la place du composant (ne déclenche aucun appel réseau) -->
        <div class="box skeleton">Le graphique apparaîtra ici...</div>
      } 
      @loading (minimum 1s) {
        <!-- S'affiche PENDANT le téléchargement réseau du chunk JavaScript -->
        <!-- 'minimum 1s' évite un clignotement désagréable si la connexion est très rapide -->
        <div class="box spinner">⏳ Téléchargement du module graphique en cours...</div>
      } 
      @error {
        <!-- S'affiche si le réseau coupe au moment du téléchargement -->
        <div class="box error">❌ Échec du chargement du graphique.</div>
      }
    </div>
  `,
  styles: [`
    .dashboard { font-family: sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
    .spacer { height: 1200px; background: linear-gradient(#f0f0f0, #dcdcdc); display: flex; align-items: center; justify-content: center; margin: 20px 0; border-radius: 8px; color: #555; }
    
    /* Styles pour les états d'attente */
    .box { padding: 40px; text-align: center; border: 2px dashed #aaa; border-radius: 8px; }
    .skeleton { background-color: #f9f9f9; color: #999; }
    .spinner { border-color: #2196f3; color: #2196f3; font-weight: bold; background-color: #e3f2fd; }
    .error { border-color: #f44336; color: #f44336; background-color: #ffebee; }
  `]
})
export class DashboardComponent {}