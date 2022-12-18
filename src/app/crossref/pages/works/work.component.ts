import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators'
import { Work } from '../../interfaces/work';
import { CrossrefService } from '../../services/crossref.service';

@Component({
    selector: 'app-ver-pais',
    templateUrl: './work.component.html',
    styles: [
    ]
})
export class WorkComponent implements OnInit {

    work!: Work;

    constructor(private activatedRoute: ActivatedRoute, private crossrefService: CrossrefService) { }

    ngOnInit(): void {

        this.activatedRoute.params
            .pipe(
                switchMap(({ id }) => this.crossrefService.getSingleWork(id)),
                tap(console.log)
            )
            .subscribe((work) => this.work = work);

        // this.activatedRoute.params
        //     .subscribe(({id}) => {
        //       console.log(id);
        //       this.paisService.getPaisPorAplha(id).subscribe((pais) => {
        //         console.log(pais);
        //       })
        // })
    }



}