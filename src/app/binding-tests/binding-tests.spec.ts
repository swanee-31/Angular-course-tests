import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
