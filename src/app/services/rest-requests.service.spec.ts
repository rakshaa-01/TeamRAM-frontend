import { TestBed } from '@angular/core/testing';

import { RestRequestsService } from './rest-requests.service';

describe('RestRequestsService', () => {
  let service: RestRequestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestRequestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
