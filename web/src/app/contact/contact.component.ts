import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list'; 

export interface Tile {
  cols: number;
  rows: number;
  text: string;
  border: string;

}


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  disabledSubmitButton: boolean = true;
  tiles: Tile[] = [
    {text: 'Tile 1', cols: 2, rows: 1 ,border: '3px white'},
    {text: 'Tile 2', cols: 2, rows: 1 ,border: '3px white'},
    {text: 'Tile 3', cols: 2, rows: 1 ,border: '3px white'},
    {text: 'Tile 4', cols: 2, rows: 1 ,border: '3px white'},
    ];
  
  @HostListener('input') oninput() {
    if (this.contactForm.valid) {
      this.disabledSubmitButton = false;
    }

  }
  

  constructor(
    private fb: FormBuilder,
    //  private connectionService: ConnectionService
  ) {
    this.contactForm = fb.group({
      contactFormName: ['', Validators.required],
      contactFormEmail: ['', Validators.compose([Validators.required, Validators.email])],
      contactFormSubjects: ['', Validators.required],
      contactFormMessage: ['', Validators.required],
    });
  }
  ngOnInit(): void {
  }

  onSubmit() {
    // this.connectionService.sendMessage(this.contactForm.value).subscribe(() => {
    //   alert('Your message has been sent.');
    //   this.contactForm.reset();
    //   this.disabledSubmitButton = true;
    // }, (error: any) => {
    //   console.log('Error', error);
    // });
    console.log(this.contactForm.value);
  }
  
  
}
