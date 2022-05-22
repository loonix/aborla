import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPageComponent } from './list-page/list-page.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { MatDialogModule } from '@angular/material/dialog';


const routes: Routes = [
  { path: '', component: ListPageComponent },
  {
    path: ':id',
    component: DetailPageComponent,
    // children: [
    //   {path: 'edit', component: AddEditListItemComponent},
    // ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    MatDialogModule,
  ],
  exports: [RouterModule],

})
export class FeedRoutingModule { }
