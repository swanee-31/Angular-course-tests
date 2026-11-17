import { TestBed } from '@angular/core/testing';
import { DiscountService } from './discount-service';

describe('DiscountService', () => {
  let service: DiscountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiscountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('doit calculer le bon prix après une réduction de 20%', () => {
    // 1. Arrange (Préparer)
    const prixInitial = 100;
    const reduction = 20;

    // 2. Act (Agir)
    const resultat = service.applyDiscount(prixInitial, reduction);

    // 3. Assert (Vérifier)
    expect(resultat).toBe(80);
  });

  it('doit retourner 0 si le prix initial est négatif', () => {
    // 1. Arrange (Préparer)
    const prixInitial = -100;
    const reduction = 20;

    // 2. Act (Agir)
    const resultat = service.applyDiscount(prixInitial, reduction);

    // 3. Assert (Vérifier)
    expect(resultat).toBe(0);
  }); 

  it('doit retourner 0 si le pourcentage de réduction est négatif', () => {
    // 1. Arrange (Préparer)
    const prixInitial = 100;
    const reduction = -20;

    // 2. Act (Agir)
    const resultat = service.applyDiscount(prixInitial, reduction);

    // 3. Assert (Vérifier)
    expect(resultat).toBe(0);
  });
});
