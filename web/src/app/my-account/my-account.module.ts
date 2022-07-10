import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyAccountComponent } from './my-account.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MyAccountRoutingModule } from './my-account-routing.module';
import { SharedModule } from '@app/@shared';

@NgModule({
  imports: [
    CommonModule, 
    TranslateModule, 
    FlexLayoutModule, 
    MaterialModule, 
    MyAccountRoutingModule,
    FormsModule,
    ReactiveFormsModule, SharedModule
  ],
  declarations: [MyAccountComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class MyAccountModule { }
