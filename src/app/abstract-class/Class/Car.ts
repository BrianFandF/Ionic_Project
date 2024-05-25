export abstract class Car {
    name!: string;
    constructor(name: string) {
        this.name = name;
    };
    abstract show(): any;
    abstract calculateFuelExpense(): any;
}