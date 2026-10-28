import { ComponentFixture, TestBed } from '@angular/core/testing';
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
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
