import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Student } from '../myform/Class/student';
import { ValidatorDateService } from '../myform/Service/validator.service';
import { PhoneNumberValidatorService } from '../myform/Service/phone-number-validator.service';

@Component({
  selector: 'app-updateform',
  templateUrl: './updateform.component.html',
  styleUrls: ['./updateform.component.scss'],
})
export class UpdateformComponent  implements OnInit {
  @Input() student!: Student;
  @Input() show: boolean = true;
  @Output() studentChange: EventEmitter<Student> = new EventEmitter<Student>();
  @Output() showChange = new EventEmitter();
  constructor() { }
  validate_date(d: string): boolean {
    let validator = new ValidatorDateService()
    if(d)
      if(!validator.validate_date(d)) return false; else return true;
    else return true;
  }
  validate_phone(tNumber: string): boolean {
    let validator = new PhoneNumberValidatorService()
    if(tNumber)
      if(!validator.validate_phoneNumber(tNumber)) return false; else return true;
    else return true;
  }
  save(fullName: any, db: any, address: any, tNumber: any) {
    this.show = false;
    if(this.validate_date(db) && this.validate_phone(tNumber)) {
      this.student = new Student(fullName, db, address, tNumber, this.student.additionalContacts);
      this.studentChange.emit(this.student);
      this.showChange.emit(this.show);
    }
    else {
      throw Error("Error date or telephone number");
    }
  }

  ngOnInit() {}

}