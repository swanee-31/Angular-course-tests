import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BadPerformanceComponent } from './bad-performance-component';

describe('BadPerformanceComponent', () => {
  let component: BadPerformanceComponent;
  let fixture: ComponentFixture<BadPerformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BadPerformanceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BadPerformanceComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
