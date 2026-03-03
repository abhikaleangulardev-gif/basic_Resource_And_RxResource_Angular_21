import { TestBed } from '@angular/core/testing';

import { Rxresource } from './rxresource';

describe('Rxresource', () => {
  let service: Rxresource;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Rxresource);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
