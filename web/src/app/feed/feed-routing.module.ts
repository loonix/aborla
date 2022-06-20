import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPageComponent } from './list-page/list-page.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { MatDialogModule } from '@angular/material/dialog';
import { Shell } from '@app/shell/shell.service';

const routes: Routes = [
  Shell.childRoutes([
    { path: '', redirectTo: '/feed', pathMatch: 'full' },
    { path: 'feed', component: ListPageComponent },
    { path: 'feed/:id', component: DetailPageComponent },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes), MatDialogModule],
  exports: [RouterModule],
})
export class FeedRoutingModule {}
