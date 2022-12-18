import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByAgencyComponent } from './pages/byAgency/byAgency.component';
import { WorksComponent } from './pages/work/works.component';
import { WorkComponent } from './pages/works/work.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: WorksComponent,
            },
            {
                path: 'work/:id',
                component: WorkComponent,
            },
            {
                path: 'work/:id:/agency',
                component: ByAgencyComponent,
            }
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CrossrefRoutingModule { }