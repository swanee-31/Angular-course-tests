import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChartDashBoard } from './chart-dash-board';

describe('ChartDashBoard', () => {
  let component: ChartDashBoard;
  let fixture: ComponentFixture<ChartDashBoard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartDashBoard],
    }).compileComponents();

    fixture = TestBed.createComponent(ChartDashBoard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
