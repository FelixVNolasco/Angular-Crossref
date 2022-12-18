import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ByAgencyComponent } from './pages/byAgency/byAgency.component';
import { WorkComponent } from './pages/works/work.component';
import { WorksComponent } from './pages/work/works.component';
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
        FormsModule,
        RouterModule
    ]
})
export class CrossrefModule { }