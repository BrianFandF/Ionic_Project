import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { Student } from './Class/student';
import { Validators } from '@angular/forms';
import { dateValidator } from './Service/dateValidator';
import { ValidatorDateService } from './Service/validator.service';
import { phoneNumberValidator } from './Service/phoneNumberValidator';
import { PhoneNumberValidatorService } from './Service/phone-number-validator.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.scss'],
})
export class MyformComponent  implements OnInit {
  studentForm!: FormGroup;
  student!: Student;
  @Output() studentAdd: EventEmitter<Student> = new EventEmitter<Student>();

  //datePattern = "^[0-9]{2}[.-/][0-9]{2}[.-/][0-9]{4}$";
  //phonePattern = "^\\+\\d{1,3}\\d{1,12}$";

  constructor(private fb: FormBuilder, private alertController: AlertController) {
    this.studentForm = this.fb.group({
      studentFullName: ['', [Validators.required]],
      studentDateOfBirth: ['', [dateValidator()]],
      studentAddress: ['', [Validators.required]],
      studentPhoneNumber: ['', [phoneNumberValidator()]],
      additionalContacts: new FormArray([new FormControl()]),
    });
  }

  addAdditionalContacts() {
    console.log("Add");
    (this.studentForm.controls['additionalContacts'] as FormArray).push(
      new FormControl()
    )
  }

  deleteAdditionalContacts(i: any) {
    console.log('Delete');
    (this.studentForm.controls['additionalContacts'] as FormArray).removeAt(i)
  }

  getControls() { return (this.studentForm.get('additionalContacts') as FormArray).controls; }

  onSubmit() {
    let fullName = this.studentForm.value.studentFullName;
    let dateBirth = this.studentForm.value.studentDateOfBirth;
    let address = this.studentForm.value.studentAddress;
    let phoneNumber = this.studentForm.value.studentPhoneNumber;
    let addContacts = this.studentForm.value.additionalContacts;
    this.student = new Student(fullName, dateBirth, address, phoneNumber, addContacts);
    console.log("Submit");
    this.printStudentInfo(this.student);
    this.studentAdd.emit(this.student);
  }

  printStudentInfo(student: Student): void {
    console.log(`ПІБ студента: ${student.fullName}`);
    console.log(`Дата народження: ${student.dateOfBirth}`);
    console.log(`Адреса: ${student.address}`);
    console.log(`Телефон: ${student.phoneNumber}`);
    if (student.additionalContacts.length > 0) {
      console.log("Додаткові засоби зв'язку:");
      student.additionalContacts.forEach((contact, index) => {
        console.log(`${index + 1}: ${contact}`);
      });
    } else {
      console.log('Немає додаткових засобів зв\'язку.');
    }
  }

  ngOnInit() {}

}