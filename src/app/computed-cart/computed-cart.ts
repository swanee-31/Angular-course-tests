import { Component, computed, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-computed-cart',
  styleUrl: './computed-cart.css',
  templateUrl: './computed-cart.html',
})
export class ComputedCart {
  // 1. Les états de base (Modifiables via .set() ou .update())
  price = signal(1200);
  quantity = signal(1);

  // 2. Les états dérivés (En lecture seule)
  // Angular détecte automatiquement que ce computed dépend de 'price' et 'quantity'
  totalPrice = computed(() => this.price() * this.quantity());

  // Un computed peut même dépendre d'un autre computed !
  isFreeShipping = computed(() => this.totalPrice() > 2000);

  increase() {
    this.quantity.update(q => q + 1);
  }

  decrease() {
    this.quantity.update(q => Math.max(1, q - 1));
  }
}
