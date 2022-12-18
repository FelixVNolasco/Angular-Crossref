import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByAgencyComponent } from './crossref/pages/byAgency/byAgency.component';
import { WorksComponent } from './crossref/pages/work/works.component';
import { WorkComponent } from './crossref/pages/works/work.component';

const routes: Routes = [
  {
    path: "",
    component: WorksComponent,
    pathMatch: "full" 
  },
  {
    path: 'work/:id',
    component: WorkComponent,
    pathMatch: "full" 
  },
  {
    path: 'work/:id:/agency',
    component: ByAgencyComponent,
    pathMatch: "full" 
  },
  {
    path: "**",
    redirectTo: ""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
