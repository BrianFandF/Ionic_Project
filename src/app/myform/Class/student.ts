export class Student {
    fullName: string = "";
    dateOfBirth: Date;
    address: string = "";
    phoneNumber: string = "";
    additionalContacts: string[] = [];
  
    constructor(
      fullName: string,
      dateOfBirth: Date,
      address: string,
      phoneNumber: string,
      additionalContacts: string[]
    ) {
      this.fullName = fullName;
      this.dateOfBirth = dateOfBirth;
      this.address = address;
      this.phoneNumber = phoneNumber;
      this.additionalContacts = additionalContacts;
    }
  }  