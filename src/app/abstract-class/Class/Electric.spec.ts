import { Electric } from "./Electric";
//import { exception } from "console";

describe('Electric testing', () => {
    let electrocar:Electric;
    beforeEach(()=>
    {
        electrocar = new Electric("Tesla", 75, 2000);
    });

    it("Створення екземпляру класу",()=>{
        expect(electrocar).toBeTruthy();
    });

    it("Створення екземпляру класу з від'ємною ємністю акумулятора", () => {
        expect(() => new Electric("Tesla", -75, 2000)).toThrow(new Error('batteryCapacity <= 0'));
    });

    it("Створення екземпляру класу з від'ємною масою", () => {
        expect(() => new Electric("Tesla", 75, -2000)).toThrow(new Error('masa <= 0'));
    });

    it("Перевірка розрахунку витрат пального на 100км", () => {
        let resMethod = electrocar.calculateFuelExpense();
        let resHand = (75 / 2000) * 100;
        expect(resMethod.toFixed(2)).toBe(resHand.toFixed(2));
    });
});