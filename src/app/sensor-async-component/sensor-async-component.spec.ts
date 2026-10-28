import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SensorAsyncComponent } from './sensor-async-component';

describe('SensorAsyncComponent', () => {
  let component: SensorAsyncComponent;
  let fixture: ComponentFixture<SensorAsyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SensorAsyncComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SensorAsyncComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
