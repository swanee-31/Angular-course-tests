import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
