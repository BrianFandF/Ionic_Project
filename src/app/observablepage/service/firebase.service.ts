import { Theater } from "./Theater";
import { Actor } from "./Actor";
import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})

export class FirebaseService {
  actorListRef?: AngularFireList<any>;
  theaterListRef?: AngularFireList<any>;
  bdRef?: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase) {}

  createActor(actor: Actor) {
    return this.actorListRef?.push({
      Surname: actor.Surname,
      Name: actor.Name,
      age: actor.age,
      fee: actor.fee,
      theater_id: actor.theater_id
    })
  }

  createTheater(theater: Theater) {
    return this.theaterListRef?.push({
      id: theater.id,
      name: theater.name
    })
  }

  getRecord(id: string, bd: string) {
    this.bdRef = this.db.object('/' + bd + id);
    console.log("bdRef=" + this.bdRef.snapshotChanges());
    return this.bdRef;
  }

  getRecordList(bd: string, op: boolean) {
    if(op) {
      this.actorListRef = this.db.list('/' + bd);
      return this.actorListRef;
    }
    else {
      this.theaterListRef = this.db.list('/' + bd);
      return this.theaterListRef;
    }
  }

  updateActor(id: number, actor: Actor, bd: string) {
    this.bdRef = this.db.object('/' + bd + '/' + id);
    return this.bdRef.update({
      Surname: actor.Surname,
      Name: actor.Name,
      age: actor.age,
      fee: actor.fee,
      theater_id: actor.theater_id
    })
  }

  updateTheater(id: number, theater: Theater, bd: string) {
    this.bdRef = this.db.object('/' + bd + '/' + id);
    return this.bdRef.update({
      id: theater.id,
      name: theater.name
    })
  }

  deleteRecord(id: string, bd: string) {
    this.bdRef = this.db.object('/' + bd + '/' + id);
    this.bdRef.remove();
  }
}