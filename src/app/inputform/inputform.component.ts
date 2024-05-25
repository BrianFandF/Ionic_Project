import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CalculationService } from './Service/calculation.service';
import { numberValidator } from './Service/numberValidator';

@Component({
  selector: 'app-inputform',
  templateUrl: './inputform.component.html',
  styleUrls: ['./inputform.component.scss'],
})
export class InputformComponent  implements OnInit {
  inputForm!: FormGroup;
  start_number!: number;
  quantity_number!: number;
  sequence: number[] | undefined;
  summa!: number;
  dobutok!: number;
  average!: number;
  @Output() readyInfa: EventEmitter<any> = new EventEmitter<any>();

  quantityPattern = "^(3|5|7|9|[13579][13579])$";

  constructor(private fb: FormBuilder) {
    this.inputForm = this.fb.group({
      /*startNumber: ['', [Validators.required, Validators.min(3), Validators.max(99), 
        Validators.pattern(this.quantityPattern)]],*/
      startNumber: ['', [Validators.required, Validators.min(3), Validators.max(99), 
        numberValidator()]],
      quantity: ['', [Validators.required, Validators.min(1)]],
    });
  }

  onSubmit() {
    if (this.inputForm.valid) {
      this.start_number = this.inputForm.value.startNumber;
      this.quantity_number = this.inputForm.value.quantity;
      let service = new CalculationService;
      const { sequence, sum, product, average } = service.calculateSequence(this.start_number, 
        this.quantity_number);
      this.sequence = sequence;
      this.summa = sum;
      this.dobutok = product;
      this.average = average;
      console.log("Submit");
      console.log("Послідовність: ", this.sequence);
      console.log("Сума: ", this.summa);
      console.log("Добуток: ", this.dobutok);
      console.log("Середнє значення: ", this.average);
      this.readyInfa.emit({
        startNumber: this.start_number,
        quantityNumber: this.quantity_number,
        sequence: this.sequence,
        sum: this.summa,
        product: this.dobutok,
        average: this.average
      });
    } else {
      console.log("Invalid form");
    }
  }

  ngOnInit() {}

}