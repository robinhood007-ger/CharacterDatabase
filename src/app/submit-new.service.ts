import { Hero } from './hero';
import { HEROES } from './IanVerseFinished';
import { Createhero } from './CreateHero';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, throwError} from 'rxjs'
import {map, catchError} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SubmitNewService {

  constructor(private httpClient: HttpClient, ) {
   }

   save(createHero: Createhero): Observable<Createhero>{
     console.log(createHero)
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

   get(): Observable<Createhero[]>{
     return this.httpClient.get<Createhero[]>('http://localhost:3000/hero')
     .pipe(
       map(result => {
         return result
       }),
       catchError(err => {
         return throwError(err)
       })
     )
  }

  getCreatedHero(id:string):Observable<Createhero>{
    return this.httpClient.get<Createhero>('http://localhost:3000/hero/' + id)
    .pipe(
      map(result => {
        return result
      }),
      catchError(err => {
        return throwError(err)
      })
    )
  }

  delete(id:string): Observable<Createhero>{
    console.log(id)
    return this.httpClient.delete<Createhero>('http://localhost:3000/hero/' + id)
    .pipe(
      map(result =>{
        return result
      }),
      catchError(err=>{
        return throwError(err)
      })
    )
  }
}
