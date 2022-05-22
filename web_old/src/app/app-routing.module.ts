import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './user/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/feed', pathMatch: 'full' },
  {
    path: 'feed',
    loadChildren: () =>
      import('./feed/feed.module').then(m => m.FeedModule),
  },
  // {
  //   path: ':id',
  //   component: DetailPageComponent,
  //   children: [
  //     { path: 'edit',pathMatch:'full', component: AddEditListItemComponent},
  //   ]
  // },
  {
    path: 'login',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: 'kanban',
    loadChildren: () =>
      import('./kanban/kanban.module').then(m => m.KanbanModule),
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
