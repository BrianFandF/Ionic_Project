import { Book } from "./Book";

describe('Book testing', () => {
    let book:Book;
    beforeEach(()=>
    {
        book = new Book("Шерлок Холмс", "Артур Конан Дойл", 1892, "Детектив");
    });

    it("Створення екземпляру класу",()=>{
        expect(book).toBeTruthy();
    });

    it("Вивод інформації", () => {
        expect(book.getInfo()).toBe("Шерлок Холмс by Артур Конан Дойл, genre: Детектив, 1892");
    });
});