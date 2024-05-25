import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modulepage',
  templateUrl: './modulepage.page.html',
  styleUrls: ['./modulepage.page.scss'],
})
export class ModulepagePage implements OnInit {
  start_number!: number;
  quantity_number!: number;
  sequence!: number[];
  summa!: number;
  dobutok!: number;
  average!: number;
  show_result:boolean =false;
  constructor() { }

  appropriation(event: any) {
    this.start_number = event.startNumber;
    this.quantity_number = event.quantityNumber;
    this.sequence = event.sequence;
    this.summa = event.sum;
    this.dobutok = event.product;
    this.average = event.average;
    this.show_result = true;
  }
  
  chunkArray(array: number[], chunkSize: number): number[][] {
    let result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  }

  ngOnInit() {
  }

}
