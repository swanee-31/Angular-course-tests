import { describe, it, expect, beforeEach, vi } from 'vitest';
import { CartService } from './cart-service';
import { PaymentService } from './payment-service';

describe('CartService', () => {
  let cartService: CartService;
  let mockPaymentService: PaymentService;

  beforeEach(() => {
    // On crée une fausse instance du service de paiement
    mockPaymentService = new PaymentService();
    
    // On instancie le service à tester en lui injectant le faux service
    cartService = new CartService(mockPaymentService);
  });

  it('doit vider le panier si le paiement est accepté', () => {
    // 1. Arrange
    cartService.addItem('Livre', 15);
    
    // On "espionne" la méthode pay() du faux service et on force sa réponse à 'true'
    // C'est le coeur du Mocking : on contrôle le comportement externe.
    vi.spyOn(mockPaymentService, 'pay').mockReturnValue(true);

    // 2. Act
    const isSuccess = cartService.checkout();

    // 3. Assert
    expect(isSuccess).toBe(true);
    // On peut vérifier qu'une méthode a bien été appelée par notre code !
    expect(mockPaymentService.pay).toHaveBeenCalledWith(15); 
    expect(cartService.getItems().length).toBe(0); // Le panier doit être vide
  });
});