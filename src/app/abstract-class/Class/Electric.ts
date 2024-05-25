import { Car } from "./Car"

export class Electric extends Car {
    batteryCapacity!: number;
    masa!: number;
    constructor(name: string, batteryCapacity: number, masa: number) {
        if(batteryCapacity <= 0) {
            throw new Error('batteryCapacity <= 0');
        }
        if(masa <= 0) {
            throw new Error('masa <= 0');
        }
        super(name);
        this.batteryCapacity = batteryCapacity;
        this.masa = masa;
    }

    calculateFuelExpense() {
        return (this.batteryCapacity / this.masa) * 100;
    }

    show() {
        return "Назва = " + this.name + " " + "Ємність акумулятора = " + this.batteryCapacity + " " + 
        "Маса = " + this.masa;
    }
}