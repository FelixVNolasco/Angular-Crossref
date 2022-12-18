import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByAgencyComponent } from './pages/byAgency/byAgency.component';
import { WorkComponent } from './pages/works/work.component';
import { WorksComponent } from './pages/work/works.component';
import { RouterModule } from '@angular/router';
import { InputComponent } from './components/input/input.component';
import { TableComponent } from './components/table/table.component';

@NgModule({
    declarations: [
        ByAgencyComponent,
        WorkComponent,
        WorksComponent,
        // InputComponent,
        // TableComponent,
    ],
    exports: [
        ByAgencyComponent,
        WorkComponent,
        WorksComponent,
    ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class CrossrefModule { }