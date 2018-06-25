/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LocalserviceService } from './localservice.service';

describe('LocalserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalserviceService]
    });
  });

  it('should ...', inject([LocalserviceService], (service: LocalserviceService) => {
    expect(service).toBeTruthy();
  }));
});
