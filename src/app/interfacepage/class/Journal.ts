import { PrintedPublication } from "./PrintedPublication"
import { Readable } from "../interface/iReadable"

export class Journal extends PrintedPublication implements Readable {
    constructor(title: string, author: string, year: number, public issueNumber: number) {
        super(title, author, year);
    }

    read() {
        console.log(`Reading ${this.title}, issue ${this.issueNumber}...`);
    }

    getInfo(): string {
        return `${this.title}, issue ${this.issueNumber}, edited by ${this.author}, ${this.year}`;
    }
}