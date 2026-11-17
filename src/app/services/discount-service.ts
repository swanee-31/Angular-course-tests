import { Service } from '@angular/core';

@Service()
export class DiscountService {
    applyDiscount(price: number, discountPercentage: number): number {
    if (price < 0 || discountPercentage < 0) return 0;
    const discount = price * (discountPercentage / 100);
    return price - discount;
  }
}
