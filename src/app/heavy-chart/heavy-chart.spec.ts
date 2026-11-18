import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeavyChartComponent } from './heavy-chart';

describe('HeavyChartComponent', () => {
  let component: HeavyChartComponent;
  let fixture: ComponentFixture<HeavyChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeavyChartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeavyChartComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
