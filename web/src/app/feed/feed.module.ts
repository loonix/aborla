import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedRoutingModule } from './feed-routing.module';
import { ListPageComponent } from './list-page/list-page.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { SharedModule } from '../shared/shared.module';
import { AddEditListItemComponent } from './add-edit-list-item/add-edit-list-item.component';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [ListPageComponent, DetailPageComponent,AddEditListItemComponent],
  imports: [
    CommonModule,
    SharedModule,
    FeedRoutingModule,
    MaterialModule
  ],
  entryComponents: [AddEditListItemComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],

})
export class FeedModule { }
