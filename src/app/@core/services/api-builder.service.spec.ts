import { TestBed } from '@angular/core/testing';

import { ApiBuilderService } from './api-builder.service';

describe('ApiBuilderService', () => {
  let service: ApiBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
