import { ConfigBdService } from "./config.service";
import { Actor } from "./Actor";

export class ActorList {
    actorList = new Array();
    searchActor = new Array();
    theatSub = this.configService.theat$

    .subscribe(() => {
        let theat = this.configService.theat$.value;
        this.search(theat.id);
    });

    constructor(private configService:ConfigBdService) { }

    add(actor:Actor) {
        this.actorList.push(actor);
        this.search(actor.theater_id);
    }

    search(id_theater:number) {
        this.searchActor = this.actorList.filter((actor) => {
            return actor.theater_id == id_theater;
        })
    }
}