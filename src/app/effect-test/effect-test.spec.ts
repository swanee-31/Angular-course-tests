import { ComponentFixture, TestBed } from '@angular/core/testing';
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
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
