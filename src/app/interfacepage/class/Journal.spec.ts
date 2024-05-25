import { Journal } from "./Journal";

describe('Journal testing', () => {
    let journal:Journal;
    beforeEach(()=>
    {
        journal = new Journal("Ігроманія", "Салім", 2024, 777);
    });

    it("Створення екземпляру класу",()=>{
        expect(journal).toBeTruthy();
    });

    it("Вивод інформації", () => {
        expect(journal.getInfo()).toBe("Ігроманія, issue 777, edited by Салім, 2024");
    });
});