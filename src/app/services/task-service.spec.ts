import { describe, it, expect, beforeEach } from 'vitest';
import { TaskService } from './task-service';

describe('TaskService', () => {
  let service: TaskService;

  // S'exécute avant chaque test pour garantir un état vierge
  beforeEach(() => {
    service = new TaskService();
  });

  it('Test 1 : doit avoir une liste vide et 0 tâche en attente au démarrage', () => {
    // Assert
    expect(service.getTasks()()).toEqual([]);
    expect(service.pendingTasksCount()).toBe(0);
  });

  it('Test 2 : doit ajouter une tâche non complétée et incrémenter le compteur', () => {
    // Arrange & Act
    service.addTask('Faire les courses');

    // Assert
    const tasks = service.getTasks()();
    expect(tasks.length).toBe(1);
    expect(tasks[0].title).toBe('Faire les courses');
    expect(tasks[0].completed).toBe(false); // Par défaut, non terminée
    expect(service.pendingTasksCount()).toBe(1); // L'état dérivé s'est mis à jour !
  });

  it('Test 3 : ne doit pas ajouter de tâche si le titre est vide ou ne contient que des espaces', () => {
    // Act
    service.addTask('   ');
    service.addTask('');

    // Assert
    expect(service.getTasks()().length).toBe(0);
    expect(service.pendingTasksCount()).toBe(0);
  });

  it('Test 4 : doit marquer une tâche comme terminée et décrémenter le compteur', () => {
    // 1. Arrange : On prépare l'état initial
    service.addTask('Apprendre Vitest');
    const taskId = service.getTasks()()[0].id;

    // 2. Act : L'action que l'on souhaite tester
    service.markAsCompleted(taskId);

    // 3. Assert : Les vérifications
    const task = service.getTasks()()[0];
    expect(task.completed).toBe(true);
    expect(service.pendingTasksCount()).toBe(0); // Le computed doit réagir !
  });
});