import { Component, OnInit } from '@angular/core';
import { ActorList } from './service/ActorList';
import { TheaterList } from './service/TheaterList';
import { Theater } from './service/Theater';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { Actor } from './service/Actor';
import { FirebaseService } from './service/firebase.service';
import { ConfigBdService } from './service/config.service'
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-observablepage',
  templateUrl: './observablepage.page.html',
  styleUrls: ['./observablepage.page.scss'],
})
export class ObservablepagePage implements OnInit {
  theats = new TheaterList();
  private configService = new ConfigBdService();
  private subscriptions: Subscription[] = [];
  actorList = new ActorList(this.configService);
  theat: Theater = new Theater();
  count = 0;
  bdActor = 'Actor';
  bdTheater = 'Theater';
  constructor(public fbService: FirebaseService) { }
  ngOnInit() {
    this.fetchTask(this.bdActor, true);
    let taskRes = this.fbService.getRecordList(this.bdActor, true);
    taskRes.snapshotChanges().subscribe()
    this.fetchTask(this.bdTheater, false);
    let taskRes1 = this.fbService.getRecordList(this.bdTheater, false);
    taskRes1.snapshotChanges().subscribe()
    const theatSub = this.configService.theat$.subscribe(() => {
      this.theat = this.configService.theat$.value;
    });
    this.subscriptions.push(theatSub);
  }

  fetchTask(bd: any, op: any) {
    this.fbService.getRecordList(bd, op).valueChanges().subscribe(res => {
      console.log(res)
      if(op) this.actorList.actorList = res;
      else {
        this.theats.theat = res;
        this.theat = this.theats.theat[this.count];
        this.actorList.search(this.theat.id);
      }
    })
  }

  nextTheater() {
    if(this.count < this.theats.theat.length - 1) {
      this.count++;
    }
    else this.count = 0;
    this.configService.setTheater(this.theats.theat[this.count]);
  }
  addActor(surname: any, name: any, age: any, fee: any) {
    let actor = new Actor();
    actor.Surname = surname;
    actor.Name = name;
    actor.age = age;
    actor.fee = fee;
    actor.theater_id = this.theat.id;
    this.fbService.createActor(actor);
    this.actorList.search(this.theat.id);
    this.actorList.add(actor);
  }
  addTheater(theat: any) {
    let t = new Theater();
    t.id = this.theats.theat.length + 1;
    t.name = theat;
    console.log(t.id);
    console.log(t.name);
    this.fbService.createTheater(t);
    //this.theats.add(t);
  }
  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}