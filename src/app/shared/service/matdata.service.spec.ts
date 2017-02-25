/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MatdataService } from './matdata.service';

describe('MatdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MatdataService]
    });
  });

  it('should ...', inject([MatdataService], (service: MatdataService) => {
    expect(service).toBeTruthy();
  }));
});
