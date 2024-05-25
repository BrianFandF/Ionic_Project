import { Car } from "./Car"

export class Truck extends Car {
    p!: number;
    constructor(name: string, p: number) {
        if(p <= 0) {
            throw new Error('p <= 0');
        }
        super(name);
        this.p = p;
    }

    calculateFuelExpense() {
        return 100 * this.p;
    }

    show() {
        return "Назва = " + this.name + " " + "Вантажопідйомність = " + this.p;
    }
}