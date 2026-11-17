import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../services/task-service';

@Component({
  selector: 'app-task-manager',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="task-container">
      <h2>Gestionnaire de tâches</h2>
      
      <!-- Affichage de l'état dérivé -->
      <p data-testid="pending-count">Tâches en attente : {{ taskService.pendingTasksCount() }}</p>

      <div class="input-group">
        <input 
          data-testid="task-input" 
          [(ngModel)]="newTaskTitle" 
          placeholder="Entrez une nouvelle tâche..." 
        />
        <button data-testid="add-btn" (click)="onAddTask()">Ajouter</button>
      </div>

      <ul>
        <!-- Boucle sur le signal -->
        @for (task of taskService.getTasks()(); track task.id) {
          <li data-testid="task-item" [class.completed]="task.completed">
            <span data-testid="task-title">{{ task.title }}</span>
            
            @if (!task.completed) {
              <button 
                data-testid="complete-btn" 
                (click)="taskService.markAsCompleted(task.id)">
                Terminer
              </button>
            }
          </li>
        } @empty {
          <li data-testid="empty-message">Aucune tâche pour le moment.</li>
        }
      </ul>
    </div>
  `,
  styles: [`
    .completed { text-decoration: line-through; color: gray; }
    .input-group { margin-bottom: 20px; }
    li { margin: 10px 0; display: flex; justify-content: space-between; max-width: 400px; }
  `]
})
export class TaskManager {
  taskService = inject(TaskService);
  newTaskTitle = '';

  onAddTask() {
    this.taskService.addTask(this.newTaskTitle);
    this.newTaskTitle = ''; // Réinitialise le champ après l'ajout
  }
}