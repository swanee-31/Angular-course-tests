import { Component, computed, effect, signal } from '@angular/core';

const DAILY_GOAL = 5;

@Component({
  selector: 'app-productivity-tracker',
  standalone: true,
  template: `
    <div class="tracker-card">
      <h2>Tracker Quotidien</h2>
      
      <!-- Utilisation des computed() -->
      <div class="progress-bar-container">
        <div class="progress-fill" [style.width.%]="progressPercentage()"></div>
      </div>
      
      <h3>{{ progressPercentage() }}% - {{ completedTasks() }} / 5 tâches</h3>
      <p class="motivation"><strong>{{ message() }}</strong></p>

      <div class="actions">
        <!-- Mise à jour du signal via update() ou set() -->
        <button 
          (click)="addTask()" 
          [disabled]="completedTasks() >= 5">
          +1 Tâche
        </button>
        
        <button (click)="resetTracker()">Réinitialiser</button>
      </div>
    </div>
  `,
  styles: [`
    .tracker-card { padding: 20px; border: 1px solid #ccc; border-radius: 8px; max-width: 400px; }
    .progress-bar-container { height: 20px; background: #eee; border-radius: 10px; overflow: hidden; }
    .progress-fill { height: 100%; background: #4caf50; transition: width 0.3s ease; }
    .actions { margin-top: 15px; display: flex; gap: 10px; }
  `]
})
export class ProductivityTrackerComponent {
  // 1. SIGNAL : Initialisation depuis le cache (ou 0)
  completedTasks = signal<number>(
    parseInt(localStorage.getItem('tasks') || '0', 10)
  );

  // 2. COMPUTED : Dérivation mathématique
  progressPercentage = computed(() => {
    return Math.min(Math.round((this.completedTasks() / DAILY_GOAL) * 100), 100);
  });

  // 3. COMPUTED : Dérivation logique basée sur le précédent computed
  message = computed(() => {
    const percent = this.progressPercentage();
    if (percent === 0) return "Prêt à démarrer la journée ?";
    if (percent < 100) return "Continuez comme ça, vous y êtes presque !";
    return "Félicitations, objectif atteint ! 🚀";
  });

  constructor() {
    // 4. EFFECT : Effets de bord asynchrones
    effect(() => {
      // Angular tracke ce signal. Dès qu'il change, l'effet s'exécute.
      const current = this.completedTasks();
      
      // Sauvegarde
      localStorage.setItem('tasks', current.toString());
      
      // Notification externe
      if (current === DAILY_GOAL) {
        // Optionnel : un petit setTimeout pour laisser le DOM se mettre à jour visuellement avant l'alerte bloquante
        setTimeout(() => alert("Bravo, vous avez fini votre journée !"), 10);
      }
    });
  }

  // Fonctions d'action
  addTask() {
    this.completedTasks.update(val => val + 1);
  }

  resetTracker() {
    this.completedTasks.set(0);
  }
}