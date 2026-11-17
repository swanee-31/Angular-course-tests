import { Injectable, signal, computed } from '@angular/core';

export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  // État privé
  private tasks = signal<Task[]>([]);

  // État dérivé (Computed)
  pendingTasksCount = computed(() => 
    this.tasks().filter(task => !task.completed).length
  );

  // Expose l'état en lecture seule
  getTasks() {
    return this.tasks.asReadonly();
  }

  addTask(title: string): void {
    const trimmedTitle = title.trim();
    if (!trimmedTitle) return; // Règle métier : pas de tâche vide
    
    const newTask: Task = {
      id: Date.now(),
      title: trimmedTitle,
      completed: false
    };
    
    this.tasks.update(currentTasks => [...currentTasks, newTask]);
  }

  markAsCompleted(taskId: number): void {
    this.tasks.update(currentTasks =>
      currentTasks.map(task => 
        task.id === taskId ? { ...task, completed: true } : task
      )
    );
  }
}