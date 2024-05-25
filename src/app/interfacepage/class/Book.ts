import { PrintedPublication } from "./PrintedPublication"
import { Readable } from "../interface/iReadable"

export class Book extends PrintedPublication implements Readable {
    constructor(title: string, author: string, year: number, public genre: string) {
        super(title, author, year);
    }

    read() {
        console.log(`Reading ${this.title}...`);
    }

    getInfo(): string {
        return `${this.title} by ${this.author}, genre: ${this.genre}, ${this.year}`;
    }
}