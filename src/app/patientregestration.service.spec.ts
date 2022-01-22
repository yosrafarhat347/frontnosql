import { TestBed } from '@angular/core/testing';

import { PatientregestrationService } from './patientregestration.service';

describe('PatientregestrationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PatientregestrationService = TestBed.get(PatientregestrationService);
    expect(service).toBeTruthy();
  });
});
