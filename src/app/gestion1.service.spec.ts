import { TestBed } from '@angular/core/testing';

import { Gestion1Service } from './gestion1.service';

describe('Gestion1Service', () => {
  let service: Gestion1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Gestion1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
