import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { Book } from './book';

describe('Book', () => {
  let service: Book;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Book);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
