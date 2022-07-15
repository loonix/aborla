import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@app/material.module';
import { LoaderComponent } from './loader/loader.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { PinScrollDirective } from './directives/pin-scroll.directive';
import { RequestTypeComponent } from './components/request-type/request-type.component';

@NgModule({
  imports: [FlexLayoutModule, MaterialModule, TranslateModule, CommonModule],
  declarations: [LoaderComponent, FormGroupComponent, PinScrollDirective, RequestTypeComponent],
  exports: [LoaderComponent, FormGroupComponent, PinScrollDirective, RequestTypeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
