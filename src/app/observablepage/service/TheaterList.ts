import { Theater } from "./Theater";

export class TheaterList {
    theat = new Array();
    constructor () {
    }

    add (theater:Theater) {
        this.theat.push(theater);
    }
}