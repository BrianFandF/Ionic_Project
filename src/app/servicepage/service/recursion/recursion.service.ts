import { Injectable, Optional } from '@angular/core';
import { LogService } from '../logger/log.service';

@Injectable({
  providedIn: 'root'
})
export class RecursionService {
  private xy = new Map<number, number>();
  constructor(@Optional() private logService: LogService) { }
  calculateSeriesSum(x: number, i: number = 1, precision: number = 1E-4, sum: number = 0): number
  {
    let term = Math.sin(i * x) / i;
    if (Math.abs(term) <= precision) {
      return sum;
    } else {
      return this.calculateSeriesSum(x, i + 1, precision, sum + term);
    }
  }

  getSeries(x: number, precision: number = 1E-4): number
  {
    return this.calculateSeriesSum(x, 1, precision);
  }

  getTab(xn: number = -Math.PI, xk: number = Math.PI, h: number = 0.1, precision: number = 1E-4): Map<number, number>
  {
    for (let x = xn; x <= xk; x += h) {
      let y = this.getSeries(x, precision);
      this.xy.set(x, y);
      if (this.logService) {
        this.logService.write(`x=${x.toFixed(2)} y=${y.toFixed(4)}`);
      }
    }
    return this.xy;
  }
}