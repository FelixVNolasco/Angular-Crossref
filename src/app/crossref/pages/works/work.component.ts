import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs/operators'
// import { Country } from '../../interfaces/pais-interface';
import { Work } from '../../interfaces/work';

@Component({
    selector: 'app-ver-pais',
    templateUrl: './work.component.html',
    styles: [
    ]
})
export class WorkComponent implements OnInit {

    work!: Work;

    // constructor(private activatedRoute: ActivatedRoute, private paisService: PaisService) { }

    ngOnInit(): void {

        // this.activatedRoute.params
        //     .pipe(
        //         switchMap(({ id }) => this.paisService.getPaisPorAplha(id)),
        //         tap(console.log)
        //     )

        //     .subscribe((pais) => this.pais = pais);

        // // this.activatedRoute.params
        // //     .subscribe(({id}) => {
        // //       console.log(id);
        // //       this.paisService.getPaisPorAplha(id).subscribe((pais) => {
        // //         console.log(pais);
        // //       })
        // // })
    }



}