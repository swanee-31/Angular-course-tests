import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { EffectTest } from './effect-test';

describe('EffectTest', () => {
  let component: EffectTest;
  let fixture: ComponentFixture<EffectTest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EffectTest],
    }).compileComponents();

    fixture = TestBed.createComponent(EffectTest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
