import { Passenger } from "./Passenger";
//import { exception } from "console";

describe('Passenger testing', () => {
    let passengerCar:Passenger;
    beforeEach(()=>
    {
        passengerCar = new Passenger("Ланас", 1500);
    });

    it("Створення екземпляру класу",()=>{
        expect(passengerCar).toBeTruthy();
    });

    it("Створення екземпляру класу з від'ємним об'ємом двигуна", () => {
        expect(() => new Passenger("Ланас", -1500)).toThrow(new Error('v <= 0'));
    });

    it("Перевірка розрахунку витрат пального на 100км", () => {
        let resMethod = passengerCar.calculateFuelExpense();
        let resHand = 2.5 * 1500;
        expect(resMethod).toBe(resHand);
    });
});