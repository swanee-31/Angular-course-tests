import { Service } from '@angular/core';
import { Injectable } from '@angular/core';
import { PaymentService } from './payment-service';

export interface CartItem {
  name: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: CartItem[] = [];

  // L'injection de dépendance via le constructeur est primordiale ici.
  // C'est ce qui nous a permis, dans le fichier de test, d'injecter
  // manuellement un "mockPaymentService" à la place du vrai !
  constructor(private paymentService: PaymentService) {}

  addItem(name: string, price: number): void {
    this.items.push({ name, price });
  }

  getItems(): CartItem[] {
    return this.items; // Retourne le contenu actuel du panier
  }

  checkout(): boolean {
    // 1. Protection : on ne paie pas un panier vide
    if (this.items.length === 0) {
      return false;
    }

    // 2. Calcul du montant total (addition de tous les prix)
    const totalAmount = this.items.reduce((sum, item) => sum + item.price, 0);

    // 3. Appel de la dépendance externe (C'est CET appel que Vitest espionne)
    const isPaymentSuccessful = this.paymentService.pay(totalAmount);

    // 4. Logique métier post-paiement
    if (isPaymentSuccessful) {
      this.items = []; // On vide le panier après un succès
      return true;
    }

    return false; // Le paiement a échoué, on garde les articles
  }
}