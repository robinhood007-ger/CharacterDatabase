import { Hero } from './models/hero';
import { HEROES } from './Hardcode/IanVerseFinished';
import { Createhero } from './models/CreateHero';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SubmitNewService {
  constructor(private httpClient: HttpClient) {}

  save(createHero: Createhero): Observable<Createhero> {
    console.log(createHero);
    return this.httpClient
      .post<Createhero>('http://localhost:3000/hero', createHero)
      .pipe(
        map((result) => {
          return result;
        }),
        catchError((err) => {
          return throwError(err);
        })
      );
  }

  get(): Observable<Createhero[]> {
    return this.httpClient.get<Createhero[]>('http://localhost:3000/hero').pipe(
      map((result) => {
        return result;
      }),
      catchError((err) => {
        return throwError(err);
      })
    );
  }

  getCreatedHero(id: string): Observable<Createhero> {
    return this.httpClient
      .get<Createhero>('http://localhost:3000/hero/' + id)
      .pipe(
        map((result) => {
          return result;
        }),
        catchError((err) => {
          return throwError(err);
        })
      );
  }

  delete(id: string): Observable<Createhero> {
    return this.httpClient
      .delete<Createhero>('http://localhost:3000/hero/' + id)
      .pipe(
        map((result) => {
          return result;
        }),
        catchError((err) => {
          return throwError(err);
        })
      );
  }

  deleteAll(name: string): Observable<Createhero> {
    return this.httpClient
      .delete<Createhero>('http://localhost:3000/hero/name/' + name)
      .pipe(
        map((result) => {
          return result;
        }),
        catchError((err) => {
          return throwError(err);
        })
      );
  }

  //   deleteMultipleNames(deletedHero: Createhero ): Observable<Createhero>{
  //     return this.httpClient.delete(deletedHero.name)
  //   }
}
