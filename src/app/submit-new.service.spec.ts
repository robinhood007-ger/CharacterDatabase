import { TestBed } from '@angular/core/testing';

import { SubmitNewService } from './submit-new.service';

describe('SubmitNewService', () => {
  let service: SubmitNewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubmitNewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
