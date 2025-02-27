import { TestBed } from '@angular/core/testing';

import { MyTrnslateService } from './my-trnslate.service';

describe('MyTrnslateService', () => {
  let service: MyTrnslateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyTrnslateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
