import { TheaterList } from './TheaterList';
import { Theater } from './Theater';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigBdService {
  currentTheater = DEFAULT_THEATER;
  theat$: BehaviorSubject<Theater> = new BehaviorSubject<Theater>(DEFAULT_THEATER);

  setTheater(theater:Theater) {
    console.log("Є зміни!!!");
    this.theat$.next(theater)
  }

  constructor() { }
}

const DEFAULT_THEATER = {"id": 1, "name": "Театр Золотих Снів"};