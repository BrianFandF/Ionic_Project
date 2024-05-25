import { Component, OnInit } from '@angular/core';
import { Car } from "./Class/Car"
import { Truck } from "./Class/Truck"
import { Passenger } from "./Class/Passenger"

@Component({
  selector: 'app-abstract-class',
  templateUrl: './abstract-class.page.html',
  styleUrls: ['./abstract-class.page.scss'],
})
export class AbstractClassPage implements OnInit {

  cars: Car[] = [];
  total!: number;
  constructor() { }

  generateNumber(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  generateName(): string {
    const adjectives = ["Швидкий", "Міцний", "Легендарний", "Надійний", "Елегантний"];
    const nouns = ["Гонщик", "Вояжер", "Титан", "Блискавка", "Вітер"];

    const casualAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const casualNoun = nouns[Math.floor(Math.random() * nouns.length)];

    return `${casualAdjective} ${casualNoun}`;
}

calculateTotalCostsofFuel(): number {
  let total = 0;
  for (let car of this.cars) {
    total += car.calculateFuelExpense();
  }
  return total;
}

  ras(nn: any) {
    this.cars = new Array();
    let n = parseInt(nn);
    for(let i = 0; i < n; i++) {
      this.cars.push(new Truck(this.generateName(), this.generateNumber(1, 10)));
      this.cars.push(new Passenger(this.generateName(), this.generateNumber(1000, 3000)));
    }

    this.total = this.calculateTotalCostsofFuel();
  }

  ngOnInit() {
  }

}
