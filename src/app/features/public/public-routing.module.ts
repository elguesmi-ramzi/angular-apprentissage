import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { PublicLayoutComponent } from './public-layout/public-layout.component';
import { MeetingComponent } from './meeting/meeting.component';
import { HomePublicComponent } from './home-public/home-public.component';

const routes: Routes = [
  {
    path: '', component: PublicLayoutComponent, children: [
      { path: '', redirectTo: 'home', pathMatch:'full' },

      { path: 'home', component: HomePublicComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'meeting', component: MeetingComponent },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
