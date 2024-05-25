import { PrintedPublication } from "./PrintedPublication"
import { Readable } from "../interface/iReadable"
import { Printable } from "../interface/iPrintable"

export class Textbook extends PrintedPublication implements Readable, Printable {
    constructor(title: string, author: string, year: number, public subject: string, public gradeLevel: number) {
        super(title, author, year);
    }

    read() {
        console.log(`Studying ${this.subject} from ${this.title}...`);
    }

    print() {
        console.log(`Printing ${this.title}...`);
    }

    getInfo(): string {
        return `${this.title} for grade ${this.gradeLevel} on ${this.subject}, by ${this.author}, ${this.year}`;
    }
}