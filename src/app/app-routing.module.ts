import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'crossref',
    loadChildren: () =>
      import('./crossref/crossref-routing.module').then((m) => m.CrossrefRoutingModule),
  },
  {
    path: '**',
    redirectTo: 'crossref'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
