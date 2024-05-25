import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculationService {
  calculateSequence(startNumber: number, sequenceLength: number): { sequence: number[], 
    sum: number, product: number, average: number } {
    let sequence: number[] = [startNumber];
    let sum: number = startNumber;
    let product: number = startNumber;
    
    // Генерація послідовності
    for (let i = 1; i < sequenceLength; i++) {
      let lastNumber = sequence[sequence.length - 1];
      let nextNumber = lastNumber % 2 === 0 ? lastNumber / 2 : 3 * lastNumber + 1;
      
      sequence.push(nextNumber);
      sum += nextNumber;
      product *= nextNumber;
    }
  
    // Розрахунок середнього значення
    let average = sum / sequenceLength;
  
    return { sequence, sum, product, average };
  }

  isValidNumber(startNumber: number) {
    return startNumber % 2 !== 0;
  }

  constructor() { }
}
