import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  a: number[][] = [];
  n: number = 0;
  constructor() {}

  matrix(n: any) {
    this.a = [];
    try {
      this.n = parseInt(n);

      if(isNaN(this.n) == true) {
        throw new Error('Parameter is not a number!');
      }

      if(n <= 0) {
        throw new Error('Parameter is less than zero!');
      }

      let min: number = -1000;
      let max: number = 1000;
      let i: number = 0, j: number = 0;
      this.a = Array(this.n);
      console.log("Array is created!");
      for(i = 0; i < this.n; i++) {
        this.a[i] = Array(this.n);
        for(j = 0; j < this.n; j++) {
          this.a[i][j] = Math.floor(Math.random() * (max - min + 1)) + min;
        }
      }
    }

    catch(error) {
      console.log(error);
    }
  }

  getColor(b: number) {
    if (b < 0 && b % 2 === 0 && b % 7 === 0) {
      return 'blue';
    }

    return 'white';
  }

  ngOnInit() {

  }
}