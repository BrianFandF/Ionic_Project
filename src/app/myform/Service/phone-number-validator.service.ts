import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhoneNumberValidatorService {
  validate_phoneNumber(value: string): boolean {
    const phonePattern = /^\+\d{1,3}\d{1,12}$/;
    return phonePattern.test(value);
  }
  constructor() { }
}
