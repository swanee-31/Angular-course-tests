// counter.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, it, expect, beforeEach } from 'vitest';
import { CounterComponent } from './counter-component';

describe('CounterComponent (Interface Graphique)', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let dom: HTMLElement;

  beforeEach(async () => {
    // 1. ARRANCE : Configuration du banc d'essai
    await TestBed.configureTestingModule({
      // En Angular moderne (Standalone), on met le composant dans 'imports'
      imports: [CounterComponent] 
    }).compileComponents(); // Compile le HTML et le CSS

    // 2. Instanciation du composant et de son enveloppe
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    dom = fixture.nativeElement; // On stocke l'accès direct au HTML
    
    // 3. Déclenchement du premier rendu HTML (Initialisation)
    fixture.detectChanges(); 
  });

  it('doit afficher un score initial de 0', () => {
    // Act : On interroge le DOM virtuel
    const scoreElement = dom.querySelector('[data-testid="score-value"]');

    // Assert : On vérifie que la balise contient bien le texte "0"
    expect(scoreElement?.textContent).toBe('0');
  });

  it('doit mettre à jour le HTML quand on clique sur le bouton', () => {
    // 1. Arrange : On récupère nos éléments HTML
    const button = dom.querySelector('[data-testid="increment-btn"]') as HTMLButtonElement;
    const scoreElement = dom.querySelector('[data-testid="score-value"]');

    // 2. Act : On simule physiquement le clic sur le bouton
    button.click();
    
    // CRITIQUE : On prévient Angular que la donnée a changé et qu'il faut redessiner le HTML
    fixture.detectChanges();

    // 3. Assert : On vérifie que le DOM a bien été mis à jour
    expect(scoreElement?.textContent).toBe('1');
    expect(component.score()).toBe(1); // On peut aussi vérifier l'état côté TypeScript
  });
});