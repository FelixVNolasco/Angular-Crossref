import { Component } from '@angular/core';
// import { PaisService } from '../../services/pais.service';
// import { Country } from '../../interfaces/pais-interface';

@Component({
    selector: 'app-por-capital',
    templateUrl: './byAgency.component.html',
    styles: [
    ]
})
export class ByAgencyComponent {

    termino: string = "";
    hayError: boolean = false;
    // paises: Country[] = [];

    // constructor(private paisService: PaisService) { }

    // buscar(termino: string) {
    //     this.hayError = false;
    //     this.termino = termino;
    //     // console.log(this.termino);
    //     this.paisService.buscarCapital(this.termino).subscribe((paises) => {
    //         // console.log(paises);              
    //         this.paises = paises;
    //     }, ((err) => {
    //         console.log("ERROR EN LA PETICION");
    //         console.info(err);
    //         this.hayError = true;
    //         this.paises = [];
    //     }))
    // }
    // sugerencias(termino: string) {
    //     this.hayError = false;

    // }
}