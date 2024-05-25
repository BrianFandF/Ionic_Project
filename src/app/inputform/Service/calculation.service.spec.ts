import { TestBed } from '@angular/core/testing';

import { CalculationService } from './calculation.service';

describe('CalculationService', () => {
  let service: CalculationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('має створити дійсну послідовність, суму, добуток і середнє значення', () => {
    const startNumber = 5;
    const sequenceLength = 4; // Вибираємо 4 для простоти прикладу
    const result = service.calculateSequence(startNumber, sequenceLength);

    // Очікувані результати вираховуються вручну
    const expectedSequence = [5, 16, 8, 4];
    const expectedSum = 5 + 16 + 8 + 4;
    const expectedProduct = 5 * 16 * 8 * 4;
    const expectedAverage = expectedSum / sequenceLength;

    expect(result.sequence).toEqual(expectedSequence, 'Sequence did not match');
    expect(result.sum).toEqual(expectedSum, 'Summa did not match');
    expect(result.product).toEqual(expectedProduct, 'Dobutok did not match');
    expect(result.average).toEqual(expectedAverage, 'Average did not match');
  });
});
