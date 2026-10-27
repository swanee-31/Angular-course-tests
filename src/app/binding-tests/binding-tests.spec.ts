import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BindingTests } from './binding-tests';

describe('BindingTests', () => {
  let component: BindingTests;
  let fixture: ComponentFixture<BindingTests>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BindingTests],
    }).compileComponents();

    fixture = TestBed.createComponent(BindingTests);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
