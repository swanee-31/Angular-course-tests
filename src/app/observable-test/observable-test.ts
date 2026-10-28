import { ChangeDetectorRef, Component, OnDestroy, inject } from '@angular/core';
import { Observable, Subscription } from 'rxjs';



@Component({
  imports: [],
  selector: 'app-observable-test',
  styleUrl: './observable-test.css',
  templateUrl: './observable-test.html',
})
export class ObservableTest implements OnDestroy {
  private monFluxSubscription?: Subscription;
  private cdr = inject(ChangeDetectorRef);

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

  public isRunning: string = 'Not Running';

  constructor() {
    // On s'abonne au flux pour déclencher son exécution
    this.monFluxSubscription = this.monFlux$.subscribe({
      next: (fruit) => {
        console.log('Reçu :', fruit);
        this.isRunning = 'Running';
        this.cdr.markForCheck(); // Demande à Angular de vérifier ce composant pour les changements
      },
      error: (err) => console.error('Oups :', err),
      complete: () => {
        console.log('Terminé, plus de fruits !');
        this.isRunning = 'Not Running';
        this.cdr.markForCheck();
      }
    });
  }

  ngOnDestroy(): void {
    this.monFluxSubscription?.unsubscribe();
  }
}
