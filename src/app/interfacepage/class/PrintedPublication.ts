export abstract class PrintedPublication {
    constructor(public title: string, public author: string, public year: number) {}

    abstract getInfo(): string;
}