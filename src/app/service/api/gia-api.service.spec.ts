import { TestBed } from '@angular/core/testing';

import { GiaApiService } from './gia-api.service';

describe('GiaApiService', () => {
  let service: GiaApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GiaApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
