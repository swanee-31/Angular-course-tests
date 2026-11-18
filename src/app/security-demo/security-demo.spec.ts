import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SecurityDemoComponent } from './security-demo';

describe('SecurityDemoComponent', () => {
  let component: SecurityDemoComponent;
  let fixture: ComponentFixture<SecurityDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecurityDemoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SecurityDemoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
