import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GoodPerformanceComponent } from './good-performance-component';

describe('GoodPerformanceComponent', () => {
  let component: GoodPerformanceComponent;
  let fixture: ComponentFixture<GoodPerformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoodPerformanceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GoodPerformanceComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
