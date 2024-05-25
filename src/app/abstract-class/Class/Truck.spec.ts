import { Truck } from "./Truck";
//import { exception } from "console";

describe('Truck testing', () => {
    let truckCar:Truck;
    beforeEach(()=>
    {
        truckCar = new Truck("Малюк", 7);
    });

    it("Створення екземпляру класу",()=>{
        expect(truckCar).toBeTruthy();
    });

    it("Створення екземпляру класу з від'ємним параметром (вантажопідйомність)", () => {
        expect(() => new Truck("Малюк", -7)).toThrow(new Error('p <= 0'));
    });

    it("Перевірка розрахунку витрат пального на 100км", () => {
        let resMethod = truckCar.calculateFuelExpense();
        let resHand = 100 * 7;
        expect(resMethod).toBe(resHand);
    });
});