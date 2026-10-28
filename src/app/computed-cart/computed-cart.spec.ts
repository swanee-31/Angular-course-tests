import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComputedCart } from './computed-cart';

describe('ComputedCart', () => {
  let component: ComputedCart;
  let fixture: ComponentFixture<ComputedCart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComputedCart],
    }).compileComponents();

    fixture = TestBed.createComponent(ComputedCart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
