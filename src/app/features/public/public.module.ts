import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { HomePublicComponent } from './home-public/home-public.component';
import { ContactComponent } from './contact/contact.component';
import { PublicLayoutComponent } from './public-layout/public-layout.component';
import { MeetingComponent } from './meeting/meeting.component';


@NgModule({
  declarations: [
    HomePublicComponent,
    ContactComponent,
    PublicLayoutComponent,
    MeetingComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
