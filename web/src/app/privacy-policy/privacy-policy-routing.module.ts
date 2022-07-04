import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { PrivacyPolicyComponent } from './privacy-policy.component';


const routes: Routes = [
  // Module is lazy loaded, see app-routing.module.ts
  { path: '', component: PrivacyPolicyComponent, data: { title: marker('Privacy Policy') } },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class PrivacyPolicyRoutingModule {}
