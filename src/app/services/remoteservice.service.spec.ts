/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RemoteserviceService } from './remoteservice.service';

describe('RemoteserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RemoteserviceService]
    });
  });

  it('should ...', inject([RemoteserviceService], (service: RemoteserviceService) => {
    expect(service).toBeTruthy();
  }));
});
