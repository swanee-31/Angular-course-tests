import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SecurityDemo } from './security-demo';

describe('SecurityDemo', () => {
  let component: SecurityDemo;
  let fixture: ComponentFixture<SecurityDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecurityDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(SecurityDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
