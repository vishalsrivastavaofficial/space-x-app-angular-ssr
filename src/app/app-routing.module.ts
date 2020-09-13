import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'space-x-dashboard',
    loadChildren: () => import('./space-x/space-x.module').then(m => m.SpaceXModule)
  },
  {
    path: '**',
    redirectTo: 'space-x-dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
