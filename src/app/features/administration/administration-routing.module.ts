import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { HomeAdministrationComponent } from './home-administration/home-administration.component';
import { ContactAdminComponent } from './contact-admin/contact-admin.component';

const routes: Routes = [

  {
    path: '', component: AdminLayoutComponent, children: [

      { path: '', redirectTo: 'home', pathMatch:'full' },

      { path: 'home', component: HomeAdministrationComponent },
      { path: 'contact', component: ContactAdminComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
