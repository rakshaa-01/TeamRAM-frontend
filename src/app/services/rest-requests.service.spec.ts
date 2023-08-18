import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RestRequestsService } from './rest-requests.service';
import { HttpClient } from '@angular/common/http';

describe('RestRequestsService', () => {
  let service: RestRequestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    let httpClient = TestBed.inject(HttpClient);
    service = TestBed.inject(RestRequestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
