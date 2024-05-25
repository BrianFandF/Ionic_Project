import { Textbook } from "./Textbook";

describe('Textbook testing', () => {
    let textbook:Textbook;
    beforeEach(()=>
    {
        textbook = new Textbook("База и основи", "Артем Фролов", 2024, "Математика", 5);
    });

    it("Створення екземпляру класу",()=>{
        expect(textbook).toBeTruthy();
    });

    it("Вивод інформації", () => {
        expect(textbook.getInfo()).toBe("База и основи for grade 5 on Математика, by Артем Фролов, 2024");
    });
});