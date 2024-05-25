import { Injectable, Optional } from '@angular/core';
import { LogService } from '../logger/log.service';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  private xy = new Map();
  constructor(@Optional() private logService: LogService) { }
  getSeries(x: number, precision: number = 1E-12): number
  {
    let sum: number = 0;
    let term: number;
    let i: number = 1;
  
    do {
      term = Math.sin(i * x) / i;
      sum += term;
      i++;
    } while (Math.abs(term) > precision);
    
    return sum;
  }

  getTab(xn:number=-Math.PI, xk:number=Math.PI, h:number=0.1):Map<number,number>
  {
    let x = xn;
    let y = 0.0;
    while(x <= xk)
    {
      y = this.getSeries(x);
      this.xy.set(x, y);
      if(this.logService)
        this.logService.write("x="+x.toFixed(2)+" y="+y.toFixed(4));
      x = x + h;
    }
    return this.xy;
  }
}
