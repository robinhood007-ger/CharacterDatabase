import { Createhero } from './CreateHero';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, throwError} from 'rxjs'
import {map, catchError} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SubmitNewService {

  constructor(private httpClient: HttpClient) {
   }

   save(createHero: Createhero): Observable<Createhero>{
    return this.httpClient.post<Createhero>('http://localhost:3000/hero', createHero)
   .pipe(
     map(result => {
       return result
     }),
     catchError(err => {
       return throwError(err);
     })
   );
}
}
