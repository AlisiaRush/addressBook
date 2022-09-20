import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  let httpClient: jasmine.SpyObj<HttpClient>;
  let service: UserService;

  beforeEach(() => {
    httpClient = jasmine.createSpyObj('HttpClient', ['getUser']);
    TestBed.configureTestingModule({
      providers: [UserService, { provide: HttpClient, useValue: httpClient }],
    });
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
