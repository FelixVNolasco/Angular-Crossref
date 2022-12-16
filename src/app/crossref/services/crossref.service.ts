import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Work } from '../interfaces/work';
// import { tap } from 'rxjs/operators';
import { WorkByAgency } from '../interfaces/workByAgency';

@Injectable({
    providedIn: 'root'
})
export class PaisService {

    private apiUrl: string = "https://api.crossref.org";

    // get httpParams() {
    //     return new HttpParams().set('fields', 'name;capital;alpha2Code;population;flag')
    // }
    constructor(private http: HttpClient) { }

    getWorks(): Observable<Work[]> {
        return this.http.get<Work[]>(this.apiUrl);
    }


    getSingleWork(doi: string): Observable<Work> {
        const url = `${this.apiUrl}/${doi}`;
        return this.http.get<Work>(url);
    }

    getSingleWorkByAgency(doi: string): Observable<WorkByAgency> {
        const url = `${this.apiUrl}/${doi}/agency`
        return this.http.get<WorkByAgency>(url);
    }

    // buscarPais(termino: string): Observable<Country[]> {
    //     const url = `${this.apiUrl}/name/${termino}`
    //     return this.http.get<Country[]>(url, { params: this.httpParams });
    // }

    // buscarCapital(termino: string): Observable<Country[]> {
    //     const url = `${this.apiUrl}/capital/${termino}`
    //     return this.http.get<Country[]>(url, { params: this.httpParams });
    // }
    // buscarRegion(termino: string): Observable<Country[]> {
    //     const url = `${this.apiUrl}/region/${termino}`
    //     return this.http.get<Country[]>(url, { params: this.httpParams })
    //         .pipe(
    //             tap(console.log)
    //         )
    // }
    // getPaisPorAplha(id: string): Observable<Country> {
    //     const url = `${this.apiUrl}/alpha/${id}`
    //     return this.http.get<Country>(url);
    // }

}