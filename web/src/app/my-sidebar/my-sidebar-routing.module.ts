import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyMessagesComponent } from '@app/my-messages/my-messages.component';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { MySidebarComponent } from './my-sidebar.component';

const routes: Routes = [
  // Module is lazy loaded, see app-routing.module.ts
  {
    path: '',
    component: MySidebarComponent,
    data: { title: marker('My Sidebar') },
    children: [
      { path: 'my-account', loadChildren: () => import('../my-account/my-account.module').then((m) => m.MyAccountModule) },
      { path: 'my-items', loadChildren: () => import('../my-items/my-items.module').then((m) => m.MyItemsModule) },
      { path: 'my-cards', loadChildren: () => import('../my-cards/my-cards.module').then((m) => m.MyCardsModule) },
      { path: 'my-messages',  loadChildren: () => import('../my-messages/my-messages.module').then((m) => m.MyMessagesModule)  },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class MySidebarRoutingModule { }
