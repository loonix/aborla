import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyMessagesRoutingModule } from './my-messages-routing.module';
import { MyMessagesComponent } from './my-messages.component';

@NgModule({
  imports: [
    CommonModule, 
    TranslateModule, 
    FlexLayoutModule, 
    MaterialModule, 
    MyMessagesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [MyMessagesComponent]
})
export class MyMessagesModule { }
