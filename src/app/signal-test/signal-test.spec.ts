import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignalTest } from './signal-test';

describe('SignalTest', () => {
  let component: SignalTest;
  let fixture: ComponentFixture<SignalTest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalTest],
    }).compileComponents();

    fixture = TestBed.createComponent(SignalTest);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
