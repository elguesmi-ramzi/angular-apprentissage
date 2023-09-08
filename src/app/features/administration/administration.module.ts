import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { HomeAdministrationComponent } from './home-administration/home-administration.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { ContactAdminComponent } from './contact-admin/contact-admin.component';


@NgModule({
  declarations: [
    HomeAdministrationComponent,
    AdminLayoutComponent,
    ContactAdminComponent
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule
  ]
})
export class AdministrationModule { }
