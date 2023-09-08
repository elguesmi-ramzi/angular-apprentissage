import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './_utils/not-found/not-found.component';

const routes: Routes = [
  {path: '', loadChildren: () => import('./features/public/public.module').then(m => m.PublicModule)},
  {path: 'admin', loadChildren: () => import('./features/administration/administration.module').then(m => m.AdministrationModule)},
  {path: '**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
