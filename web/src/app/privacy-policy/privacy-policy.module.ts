import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivacyPolicyComponent } from './privacy-policy.component';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrivacyPolicyRoutingModule } from './privacy-policy-routing.module';



@NgModule({
  imports: [
    CommonModule, 
    TranslateModule, 
    FlexLayoutModule, 
    MaterialModule, 
    PrivacyPolicyRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  declarations: [PrivacyPolicyComponent]
})
export class PrivacyPolicyModule { }
