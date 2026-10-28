import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { ProductivityTrackerComponent } from './productivity-tracker-component';

describe('ProductivityTrackerComponent', () => {
  let component: ProductivityTrackerComponent;
  let fixture: ComponentFixture<ProductivityTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductivityTrackerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductivityTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
