import { parseHostBindings } from '@angular/compiler';
import { Component } from '@angular/core';
import { Work } from '../../interfaces/work';
import { CrossrefService } from '../../services/crossref.service';


@Component({
  selector: 'app-por-pais',
  templateUrl: './works.component.html',
  styles: [
    `
  li{
    cursor: pointer;
  }
  `
  ]
})
export class WorksComponent {

  termino: string = "";
  hayError: boolean = false;
  works: Work[] = [];
  suggestedWorks: Work[] = [];
  mostrarSugerencias: boolean = false;

  constructor(private crossrefSerivce: CrossrefService) { }

  buscar(termino: string) {
      this.mostrarSugerencias = false;
      this.hayError = false;
      this.termino = termino;
      // console.log(this.termino);
      this.crossrefSerivce.getWorks()
      .subscribe((works) => {
          console.log(works);
          this.works = works;
      }, ((err) => {
          console.log("ERROR");
          console.info(err);
          this.hayError = true;
          this.works = [];
      }))
  }

  // sugerencias(termino: string) {
  //     this.hayError = false;
  //     this.termino = termino;
  //     this.mostrarSugerencias = true;

  //     this.paisService.buscarPais(termino)
  //         .subscribe(paises => this.paisesSugeridos = paises.splice(0, 5),
  //             (err) => this.paisesSugeridos = [])
  // }
  // buscarSugerido(termino: string) {
  //     this.buscar(termino);
  // }
}