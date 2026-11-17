import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { TaskManager } from './task-manager';
import { TaskService } from '../services/task-service';

describe('TaskManager', () => {
  let component: TaskManager;
  let fixture: ComponentFixture<TaskManager>;
  let dom: HTMLElement;
  let taskService: TaskService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskManager], // On importe le composant à tester   
      // Note : Le TaskService est injecté automatiquement car il est 'providedIn: root'
    }).compileComponents();

    fixture = TestBed.createComponent(TaskManager);
    component = fixture.componentInstance;
    dom = fixture.nativeElement;
    
    // On récupère l'instance du service injectée dans le composant 
    // pour pouvoir l'espionner plus tard.
    taskService = TestBed.inject(TaskService);
    
    // Premier rendu HTML
    fixture.detectChanges();
  });

  it('Test 5 : doit afficher le message "Aucune tâche" au démarrage', () => {
    // Act : Recherche de l'élément dans le DOM
    const emptyMessage = dom.querySelector('[data-testid="empty-message"]');
    
    // Assert
    expect(emptyMessage).toBeTruthy();
    expect(emptyMessage?.textContent).toContain('Aucune tâche pour le moment');
  });

  it('Test 6 : doit appeler le service avec le bon texte lors du clic sur Ajouter', () => {
    // 1. Arrange
    const input = dom.querySelector('[data-testid="task-input"]') as HTMLInputElement;
    const addButton = dom.querySelector('[data-testid="add-btn"]') as HTMLButtonElement;
    
    // On pose un espion sur la méthode du service (on empêche l'exécution réelle)
    const spy = vi.spyOn(taskService, 'addTask');

    // 2. Act : On simule l'action utilisateur
    input.value = 'Réviser Angular';
    // Astuce pédagogique : ngModel a besoin de l'événement 'input' pour mettre à jour la variable côté TypeScript
    input.dispatchEvent(new Event('input')); 
    fixture.detectChanges(); 
    
    // On clique
    addButton.click();

    // 3. Assert
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith('Réviser Angular');
  });

  it('Test 7 : doit afficher la nouvelle tâche dans le DOM (Test d\'intégration complet)', () => {
    // 1. Arrange : On n'espionne pas le service, on le laisse faire son vrai travail
    const initialTasks = dom.querySelectorAll('[data-testid="task-item"]');
    expect(initialTasks.length).toBe(0);

    // 2. Act : On ajoute la tâche via la méthode du composant
    component.newTaskTitle = 'Test Intégration';
    component.onAddTask();
    
    // CRITIQUE : On indique à Angular que les données ont changé et qu'il faut redessiner le DOM
    fixture.detectChanges();

    // 3. Assert
    const taskItems = dom.querySelectorAll('[data-testid="task-item"]');
    const taskTitle = dom.querySelector('[data-testid="task-title"]');
    
    expect(taskItems.length).toBe(1);
    expect(taskTitle?.textContent).toContain('Test Intégration');
    
    // On vérifie que la balise "Aucune tâche" a bien disparu
    const emptyMessage = dom.querySelector('[data-testid="empty-message"]');
    expect(emptyMessage).toBeNull();
  });
});