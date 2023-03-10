import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
    selector: 'app-pais-input',
    templateUrl: './input.component.html',
    styles: [
    ]
})

export class InputComponent implements OnInit {

    @Input() placeholder: String = "";
    @Output() onEnter: EventEmitter<string> = new EventEmitter();
    @Output() onDebounce: EventEmitter<string> = new EventEmitter();

    termino: string = "";
    debouncer: Subject<string> = new Subject;

    buscar() {
        this.onEnter.emit(this.termino);
    }

    ngOnInit() {
        this.debouncer
            .pipe(debounceTime(300))
            .subscribe(valor => {
                // console.log('debouncer:', valor);
                this.onDebounce.emit(valor);
            });
    }
    teclaPresionada() {
        this.debouncer.next(this.termino);
    }
}