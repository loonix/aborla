import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedRoutingModule } from './feed-routing.module';
import { ListPageComponent } from './list-page/list-page.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { AddEditListItemComponent } from './add-edit-list-item/add-edit-list-item.component';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@app/@shared';
import { I18nModule } from '@app/i18n';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [ListPageComponent, DetailPageComponent, AddEditListItemComponent],
  imports: [
    CommonModule,
    SharedModule,
    FeedRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    I18nModule,
TranslateModule
  ],
  entryComponents: [AddEditListItemComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FeedModule {}
