import { Component, OnInit } from '@angular/core';
import { Student } from '../myform/Class/student';

@Component({
  selector: 'app-viewform',
  templateUrl: './viewform.component.html',
  styleUrls: ['./viewform.component.scss'],
})
export class ViewformComponent  implements OnInit {
  show_update: boolean = false;
  students: Student[] = [];
  constructor() { }
  ngOnInit() {}
  addStudent(event: any) {
    console.log("Received studentAdd event with:", event);
    if(event as Student) {
      let student: Student = event;
      this.students.push(student);
      console.log(this.students);
    }
    else
      throw new Error("Error of type");
  }
  update() { this.show_update = true; }
  showUp(event: any) {
    if(typeof event === "boolean") { this.show_update = event; }
    else
      throw new Error("Error of type");
  }
  update_save(event: any, i: number) {
    if(event as Student) {
      this.students[i] = event;
    }
    else throw new Error("Error of type");
  }
}