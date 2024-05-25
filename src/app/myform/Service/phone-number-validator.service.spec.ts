import { TestBed } from '@angular/core/testing';

import { PhoneNumberValidatorService } from './phone-number-validator.service';

describe('PhoneNumberValidatorService', () => {
  let service: PhoneNumberValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhoneNumberValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('+380679893846', () => {
    let s = service.validate_phoneNumber('+380679893846');
    expect(s).toBe(true);
  });

  it('+611689091638446', () => {
    let s = service.validate_phoneNumber('+611689091638446');
    expect(s).toBe(true);
  });

  it('+611689091638440000000000000000000000000', () => {
    let s = service.validate_phoneNumber('+611689091638440000000000000000000000000');
    expect(s).toBe(false);
  });
});
