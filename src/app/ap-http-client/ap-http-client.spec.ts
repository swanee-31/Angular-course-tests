import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { APHttpClient } from './ap-http-client';

describe('APHttpClient', () => {
  let component: APHttpClient;
  let fixture: ComponentFixture<APHttpClient>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [APHttpClient],
    }).compileComponents();

    fixture = TestBed.createComponent(APHttpClient);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
