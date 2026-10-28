import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable, EMPTY } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-sensor-async',
  standalone: true,
  imports: [AsyncPipe], // Indispensable pour utiliser | async dans le HTML
  template: `
    <div class="card">
      <h2>Sonde Thermique (AsyncPipe)</h2>
      
      <div class="status-panel">
        <p><strong>Statut :</strong> {{ status }}</p>
        
        <!-- MAGIE 1 : Le pipe async s'abonne, extrait la valeur, et rafraîchit l'écran -->
        @if (sensorData$ | async; as temp) {
          <p class="temp">Température : <strong>{{ temp }} °C</strong></p>
        }
      </div>

      <div class="actions">
        <button (click)="startSensor()" [disabled]="isActive">Démarrer</button>
        <button (click)="stopSensor()" [disabled]="!isActive" class="danger">Arrêt d'urgence</button>
      </div>
    </div>
  `,
  styles: [`/* Mêmes styles que le TP précédent */
    .card { padding: 20px; border: 2px solid #333; border-radius: 8px; max-width: 450px; font-family: sans-serif; }
    .status-panel { margin: 20px 0; padding: 15px; background: #e3f2fd; border-radius: 4px; }
    .temp { font-size: 1.2rem; color: #d32f2f; margin-top: 10px; }
    .actions { display: flex; gap: 10px; }
    button { padding: 10px 15px; cursor: pointer; border: none; border-radius: 4px; background: #1976d2; color: white; font-weight: bold; }
    button:disabled { background: #ccc; cursor: not-allowed; }
    button.danger { background: #d32f2f; }
  `]
})
export class SensorAsyncComponent {
  status: string = 'En attente de connexion...';
  isActive: boolean = false;

  // L'Observable exposé au template HTML (initialisé à null)
  sensorData$: Observable<number> | null = null;

  // Le flux brut (Création identique au TP précédent)
  private rawSensor$ = new Observable<number>((observer) => {
    let count = 0;
    const intervalId = setInterval(() => {
      count++;
      const randomTemp = Math.floor(Math.random() * 60);
      
      if (randomTemp > 50) {
        observer.error(`Surchauffe détectée à ${randomTemp}°C !`);
        clearInterval(intervalId);
      } else {
        observer.next(randomTemp);
      }

      if (count >= 5) {
        observer.complete();
        clearInterval(intervalId);
      }
    }, 1000);

    return () => clearInterval(intervalId); // Nettoyage
  });

  startSensor() {
    this.isActive = true;
    this.status = 'Connecté...';

    // On prépare le "tuyau" (pipe) avec nos réactions
    // Remarque : On ne s'abonne TOUJOURS PAS ici. On ne fait que configurer le flux.
    this.sensorData$ = this.rawSensor$.pipe(
      catchError((err) => {
        // En cas d'erreur
        this.status = err;
        this.isActive = false;
        return EMPTY; // On retourne un Observable vide pour éviter le crash de l'AsyncPipe
      }),
      finalize(() => {
        // En cas de complete() OU de desabonnement
        if (this.isActive) { // Si ce n'est pas une erreur qui a stoppé le flux
          this.status = 'Mesure terminée avec succès.';
          this.isActive = false;
        }
      })
    );
  }

  stopSensor() {
    this.status = "Déconnecté manuellement par l'opérateur.";
    this.isActive = false;
    
    // MAGIE 2 : En passant la variable à null, la condition @if du HTML devient fausse.
    // L'AsyncPipe est détruit du DOM, ce qui déclenche AUTOMATIQUEMENT le .unsubscribe() !
    this.sensorData$ = null;
  }
}