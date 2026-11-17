import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  
  /**
   * Simule un appel à une passerelle de paiement bancaire.
   * @param amount Le montant total à facturer
   * @returns true si le paiement est accepté, false sinon.
   */
  pay(amount: number): boolean {
    // Logique métier complexe ou appel réseau externe
    console.log(`Traitement bancaire de ${amount} € en cours...`);
    
    // Faux comportement aléatoire pour l'exemple (succès 8 fois sur 10)
    return Math.random() > 0.2; 
  }
}