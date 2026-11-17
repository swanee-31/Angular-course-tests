import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { ComputedCart } from './computed-cart';

describe('ComputedCart', () => {
  let component: ComputedCart;
  let fixture: ComponentFixture<ComputedCart>;
  let dom: HTMLElement;

  beforeEach(async () => {
    // Configuration du banc d'essai pour le composant ComputedCart
    await TestBed.configureTestingModule({
    // En Angular moderne (Standalone), on met le composant dans 'imports'
      imports: [ComputedCart],
    }).compileComponents(); // Compile le HTML et le CSS

    fixture = TestBed.createComponent(ComputedCart);
    component = fixture.componentInstance;
    fixture.detectChanges();
    dom = fixture.nativeElement; // On stocke l'accès direct au HTML

    fixture.detectChanges(); // On applique les changements pour que le DOM soit à jour 
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a DOM element', () => {
    expect(dom).toBeTruthy();
  });

  it('should have a quantity method', () => {
    expect(component.quantity).toBeTruthy();
  });
  it('should have an increase method', () => {
    expect(component.increase).toBeTruthy();
  });
  it('should have a price method', () => {
    expect(component.price).toBeTruthy();
  });


  it('Test increase', () => {
    const initialQty = component.quantity();
    component.increase();
    expect(component.quantity()).toBe(initialQty + 1);
  })

  it('Test Prize', () => {
    const calculatedPrice: number = component.quantity() * component.price();
    expect(calculatedPrice).toBe(component.quantity() * component.price());
  });
});
