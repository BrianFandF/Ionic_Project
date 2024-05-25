import { Component, OnInit } from '@angular/core';
import { Readable } from "./interface/iReadable"
import { Printable } from "./interface/iPrintable"
import { PrintedPublication } from "./class/PrintedPublication"
import { Book } from "./class/Book"
import { Journal } from "./class/Journal"
import { Textbook } from "./class/Textbook"

@Component({
  selector: 'app-interfacepage',
  templateUrl: './interfacepage.page.html',
  styleUrls: ['./interfacepage.page.scss'],
})
export class InterfacepagePage implements OnInit {
  show_book: string = "";
  show_journak: string = "";
  show_textbook: string = "";

  constructor() { }

  ngOnInit() {
  }

  ras() {
    let book = new Book("Шерлок Холмс", "Артур Конан Дойл", 1892, "Детектив");
    let journal = new Journal("Ігроманія", "Салім", 2024, 777);
    let textbook = new Textbook("База и основи", "Артем Фролов", 2024, "Математика", 5);

    book.read();
    journal.read();
    textbook.read();
    textbook.print();

    this.show_book = book.getInfo();
    this.show_journak = journal.getInfo();
    this.show_textbook = textbook.getInfo();
  }

}
