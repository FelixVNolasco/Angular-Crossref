import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByAgencyComponent } from './pages/byAgency/byAgency.component';
import { WorkComponent } from './pages/work/work.component';
import { WorksComponent } from './pages/works/works.component';
import { RouterModule } from '@angular/router';
import { InputComponent } from './components/input/input.component';
import { TableComponent } from './components/table/table.component';
import { NgxPaginationModule } from 'ngx-pagination';

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
        RouterModule,
        NgxPaginationModule
    ]
})
export class CrossrefModule { }