import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeavyChart } from './heavy-chart';

describe('HeavyChart', () => {
  let component: HeavyChart;
  let fixture: ComponentFixture<HeavyChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeavyChart],
    }).compileComponents();

    fixture = TestBed.createComponent(HeavyChart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
