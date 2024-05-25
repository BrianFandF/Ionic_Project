import { TestBed } from '@angular/core/testing';

import { ValidatorDateService } from './validator.service';

describe('ValidatorService', () => {
  let service: ValidatorDateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidatorDateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Перевіряємо для дати 15.25.875 результат false', () => {
    let s = service.validate_date('15.25.875');
    expect(s).toBe(false);
  })

  it('Перевіряємо для дати 15.25.1875 результат false', () => {
    let s = service.validate_date('15.25.1875');
    expect(s).toBe(false);
  })

  it('Перевіряємо для дати 15.02.1875 результат false', () => {
    let s = service.validate_date('15.02.1875');
    expect(s).toBe(true);
  })
});