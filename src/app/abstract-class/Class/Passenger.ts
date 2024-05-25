import { Car } from "./Car"

export class Passenger extends Car {
    v!: number;
    constructor(name: string, v: number) {
        if(v <= 0) {
            throw new Error('v <= 0');
        }
        super(name);
        this.v = v;
    }

    calculateFuelExpense() {
        return 2.5 * this.v;
    }

    show() {
        return "Назва = " + this.name + " " + "Об‘єм двигуна = " + this.v;
    }
}