import { UltimateStudsWIP } from './Hardcode/DanganronpaCharactersWIP';
import { PLACESINTHEWORLD } from './Hardcode/placesoftheworld';
import { MAGICTYPES } from './Hardcode/MagicTypes';
import { UltimateStuds } from './Hardcode/DanganronpaCharacters';
import { UltimateStudent } from './models/Ultimate';
import { HEROES_WIP } from './Hardcode/IanVerseWIP';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { place } from './models/place';
import { Magic } from './models/Magic';
import { Hero } from './models/hero';
import { HEROES } from './Hardcode/IanVerseFinished';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor() {}
  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
  getHero(name: string): Observable<Hero> {
    return of(HEROES.find((hero) => hero.name === name));
  }
  getHeroWIP(name: string): Observable<Hero> {
    return of(HEROES_WIP.find((heroWIP) => heroWIP.name === name));
  }
  getHeroesWIP(): Observable<Hero[]> {
    return of(HEROES_WIP);
  }
  getUltimateStud(name: string): Observable<UltimateStudent> {
    return of(UltimateStuds.find((ultimatestud) => ultimatestud.name === name));
  }
  getUltimateStuds(): Observable<UltimateStudent[]> {
    return of(UltimateStuds);
  }
  getUltimateStudWIP(name:string): Observable<UltimateStudent>{
    return of (UltimateStudsWIP.find((ultimatestudWIP)=>ultimatestudWIP.name===name))
  }
  getUltimateStudsWIP(): Observable<UltimateStudent[]>{
    return of (UltimateStudsWIP)
  }
  getMagicTypes(): Observable<Magic[]> {
    return of(MAGICTYPES);
  }
  getMagicType(name: string): Observable<Magic> {
    return of(MAGICTYPES.find((magictype) => magictype.name === name));
  }
  getPlaces(): Observable<place[]> {
    return of(PLACESINTHEWORLD);
  }
  getPlace(name: string): Observable<place> {
    return of(
      PLACESINTHEWORLD.find(
        (placesintheworld) => placesintheworld.name === name
      )
    );
  }
}
