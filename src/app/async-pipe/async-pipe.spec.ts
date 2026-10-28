import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { AsyncTest } from './async-pipe';

describe('AsyncTest', () => {
  let component: AsyncTest;
  let fixture: ComponentFixture<AsyncTest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsyncTest],
    }).compileComponents();

    fixture = TestBed.createComponent(AsyncTest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
