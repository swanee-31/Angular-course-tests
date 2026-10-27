import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AsyncTest } from '../async-pipe/async-pipe';


@Component({
  imports: [AsyncTest],
  selector: 'app-observable-test',
  styleUrl: './observable-test.css',
  templateUrl: './observable-test.html',
})
export class ObservableTest implements OnDestroy {
  private monFluxSubscription?: Subscription;

  // On définit le "plan" d'exécution
  monFlux$ = new Observable(subscriber => {
    subscriber.next("Pomme"); // Émet une valeur
    subscriber.next("Banane"); // Émet une autre valeur

    setTimeout(() => {
      subscriber.next("Cerise");
      subscriber.complete(); // Annonce la fin du flux
    }, 2000);
  });
  // À ce stade, RIEN ne s'est exécuté.

  constructor() {
    // On s'abonne au flux pour déclencher son exécution
    this.monFluxSubscription = this.monFlux$.subscribe({
      next: (fruit) => console.log('Reçu :', fruit),
      error: (err) => console.error('Oups :', err),
      complete: () => console.log('Terminé, plus de fruits !')
    });
  }

  ngOnDestroy(): void {
    this.monFluxSubscription?.unsubscribe();
  }
}
