import { TestBed } from '@angular/core/testing';

import { LogarService } from './logar.service';

describe('LogarService', () => {
  let service: LogarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
