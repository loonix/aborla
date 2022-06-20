import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'hub-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss'],
})
export class FormGroupComponent implements OnInit {
  @Input()
  control: FormControl = new FormControl();
  // formControlName of the input.
  @Input()
  name: string;
  @Input()
  label: string;
  @Input()
  validationErrors: { [key: string]: string } = {};
  @Input()
  tooltipText?: string;
  @Input()
  tooltipPlacement?: string;

  required: boolean;

  constructor() {}

  ngOnInit(): void {
    // We run the validator against a form control with an empty value and check if the required attribute exists on the result :)
    if (this.control.validator && this.control.validator(new FormControl(''))) {
      const errors = this.control.validator(new FormControl(''));
      this.required = Object.keys(errors).includes('required');
    } else {
      this.required = false;
    }
  }
}
