import { Component, Injectable, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { map, mapValues } from 'lodash';
import { HttpErrorResponse } from '@angular/common/http';

// Abstract class implementing common functionality used in the app's forms.
@Component({
  template: ''
})
export abstract class FormComponent implements OnInit, OnDestroy {
  // The form which we are working with in this modal.
  abstract form: FormGroup;

  // Nested dictionary mapping form field names to dictionaries which map all of that field's
  // possible error message names to its error messages.
  // @example:
  // {
  //   'name': {
  //     'required': errorMessages.required,
  //   },
  // }
  abstract validationMessages: { [key: string]: { [key: string]: string } };

  // Whether the form data is currently being saved/submitted.
  saveInProgress = false;
  serverError = '';

  // Dictionary of the current validation errors which will be displayed in the UI - eg:
  // {
  //   'name': ''
  // }
  validationErrors: { [key: string]: string };

  // Child component should call this manually after setting up the form in its own ngOnInit.
  ngOnInit(): void {
    // Generate form errors dictionary from the validation messages.
    this.validationErrors = mapValues(this.validationMessages, () => '');

    map(this.form.controls, (control, fieldName) => {
      // Update the validation errors when any control's value changes.
      control.valueChanges.subscribe(() => {
        this.updateValidationErrors(fieldName);
      });
      // Update the validation errors on initialisation.
      this.updateValidationErrors(fieldName);
    });
  }

  // Updates the validation errors which will be shown in the UI
  updateValidationErrors(field: string): void {
    // Clear previous error message.
    this.validationErrors[field] = '';

    const control = this.form.get(field);
    if (control && !control.valid) {
      const messages = this.validationMessages[field];
      // Show only the first error for this field.
      if (messages) {
        const firstError = Object.keys(messages).find(key => (control as any).errors[key]);
        this.validationErrors[field] = messages[firstError as any];
      }
    }
  }

  // Updates the validation errors, then returns true if there are no invalid controls, false otherwise.
  validateForm(): boolean {
    // Set any invalid controls to touched and show any form errors.
    const invalidControls = map(this.form.controls).filter(control => !control.valid);

    // Mark all controls as touched to ensure errors will be shown in the UI.
    map(this.form.controls, control => {
      this.markControlTouched(control);
    });

    Object.keys(this.validationErrors).map(field => {
      this.updateValidationErrors(field);
    });

    return !invalidControls.length;
  }

  markControlTouched(control:any): void {
    control.markAsTouched();
    if (control instanceof FormArray) {
      (control as FormArray).controls.map(c => this.markControlTouched(c));
    }
    if (control instanceof FormGroup) {
      map((control as FormGroup).controls, c => this.markControlTouched(c));
    }
  }

  serverErrorCallback = (response: HttpErrorResponse): void => {
    this.serverError = response.error.Message;
    this.saveInProgress = false;
    throw response.error.Message;
  }

  // Don't allow the user to dismiss the modal while saving.
  beforeDismiss(): boolean {
    return this.saveInProgress;
  }

  // Don't allow the user to close the modal while saving.
  beforeClose(): boolean {
    return this.saveInProgress;
  }

  ngOnDestroy(): void { }
}
