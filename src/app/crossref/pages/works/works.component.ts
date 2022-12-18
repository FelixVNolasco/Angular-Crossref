import { parseHostBindings } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
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
export class WorksComponent implements OnInit {
  ngOnInit(): void {
    this.crossrefSerivce.getWorks()
      .subscribe(({ message }) => {
        this.works = message.items;
      }, ((err) => {
        console.info(err);
        this.hayError = true;
        this.works = [];
      }))
  }

  termino: string = "";
  hayError: boolean = false;
  works: Work[] = [];
  suggestedWorks: Work[] = [];
  mostrarSugerencias: boolean = false;

  constructor(private crossrefSerivce: CrossrefService) { }


  page = 1;

  handlePageChange($event: any) {
    this.page = $event;
  }

  // buscar(termino: string) {
  //   this.mostrarSugerencias = false;
  //   this.hayError = false;
  //   this.termino = termino;
  //   console.log(this.termino);
  // }

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