import { Component, OnDestroy, inject, ChangeDetectorRef } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-sensor',
  standalone: true,
  template: `
    <div class="card">
      <h2>Moniteur de Sonde Thermique</h2>
      
      <div class="status-panel">
        <p><strong>Statut :</strong> {{ status }}</p>
        
        @if (currentTemp !== null) {
          <p class="temp">Température : <strong>{{ currentTemp }} °C</strong></p>
        }
      </div>

      <div class="actions">
        <button (click)="startSensor()" [disabled]="isActive">Démarrer la mesure</button>
        <button (click)="stopSensor()" [disabled]="!isActive" class="danger">Arrêt d'urgence</button>
      </div>
    </div>
  `,
  styles: [`
    .card { padding: 20px; border: 2px solid #333; border-radius: 8px; max-width: 450px; font-family: sans-serif; }
    .status-panel { margin: 20px 0; padding: 15px; background: #f5f5f5; border-radius: 4px; }
    .temp { font-size: 1.2rem; color: #d32f2f; margin-top: 10px; }
    .actions { display: flex; gap: 10px; }
    button { padding: 10px 15px; cursor: pointer; border: none; border-radius: 4px; background: #1976d2; color: white; font-weight: bold; }
    button:disabled { background: #ccc; cursor: not-allowed; }
    button.danger { background: #d32f2f; }
    button.danger:disabled { background: #e57373; }
  `]
})
export class SensorComponent implements OnDestroy {
  // État de l'interface
  status: string = 'En attente de connexion...';
  currentTemp: number | null = null;
  isActive: boolean = false;

  // Stockage de la souscription pour le nettoyage
  private sensorSubscription: Subscription | null = null;
  
  // Injection pour forcer la mise à jour visuelle (Change Detection)
  private cdr = inject(ChangeDetectorRef);

  // Création de l'Observable
  sensor$ = new Observable<number>((observer) => {
    let count = 0;
    
    const intervalId = setInterval(() => {
      count++;
      const randomTemp = Math.floor(Math.random() * 60); // Température entre 0 et 59°C
      
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

    // Nettoyage appelé lors du .unsubscribe()
    return () => {
      console.log("Nettoyage interne de l'Observable : intervalle coupé.");
      clearInterval(intervalId);
    };
  });

  startSensor() {
    this.isActive = true;
    this.status = 'Connecté...';
    this.currentTemp = null;

    // Définition de l'Observer
    const myObserver = {
      next: (temp: number) => {
        this.currentTemp = temp;
        this.cdr.markForCheck(); // Prévient Angular que currentTemp a changé
      },
      error: (err: any) => {
        this.status = `Erreur critique : ${err}`;
        this.isActive = false;
        this.cdr.markForCheck(); // Prévient Angular que status a changé
      },
      complete: () => {
        this.status = 'Mesure terminée avec succès (5 relevés).';
        this.isActive = false;
        this.cdr.markForCheck(); // Prévient Angular que status a changé
      }
    };

    // Abonnement
    this.sensorSubscription = this.sensor$.subscribe(myObserver);
  }

  stopSensor() {
    if (this.sensorSubscription) {
      this.sensorSubscription.unsubscribe();
      this.status = "Déconnecté manuellement par l'opérateur.";
      this.isActive = false;
      // Pas besoin de markForCheck() ici car la méthode est déclenchée par un événement de clic (UI),
      // Angular rafraîchit automatiquement l'écran dans ce cas précis.
    }
  }

  ngOnDestroy() {
    if (this.sensorSubscription) {
      this.sensorSubscription.unsubscribe();
    }
  }
}