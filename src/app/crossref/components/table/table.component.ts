import { Component, Input } from '@angular/core';
import { Work } from '../../interfaces/work';


@Component({
    selector: 'app-pais-tabla',
    templateUrl: './table.component.html'
})


export class TableComponent {

    @Input() works: Work[] = [];

    constructor() { }

}