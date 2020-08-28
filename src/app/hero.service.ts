import { PLACESINTHEWORLD } from './placesoftheworld';
import { MAGICTYPES } from './MagicTypes';
import { UltimateStuds } from './DanganronpaCharacters';
import { UltimateStudent } from './Ultimate';
import { HEROES_WIP } from './IanVerseWIP';
import { MessageService } from './message.service';
import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

import {place} from './place'
import {Magic} from './Magic'
import {Hero} from './hero';
import {HEROES} from './IanVerseFinished'

@Injectable({
  providedIn: 'root'
})
export class HeroService {


  
  constructor() { }
  getHeroes(): Observable<Hero[]> {
    return of (HEROES)
  }
  getHero(name:string):Observable<Hero>{
    return of(HEROES.find(hero=>hero.name===name));
  }
  getHeroWIP(name:string):Observable<Hero>{
    return of(HEROES_WIP.find(heroWIP=>heroWIP.name===name))
  }
  getHeroesWIP():Observable<Hero[]>{
    return of (HEROES_WIP)
  }
  getUltimateStud(name:string):Observable<UltimateStudent>{
    return of (UltimateStuds.find(ultimatestud=>ultimatestud.name===name))
  }
  getUltimateStuds():Observable<UltimateStudent[]>{
    return of (UltimateStuds)
  }
  getMagicTypes():Observable<Magic[]>{
    return of (MAGICTYPES)
  }
  getMagicType(name:string):Observable<Magic>{
    return of (MAGICTYPES.find(magictype=>magictype.name===name))
  }
  getPlaces():Observable<place[]>{
    return of (PLACESINTHEWORLD)
  }
  getPlace(name:string):Observable<place>{
    return of (PLACESINTHEWORLD.find(placesintheworld=>placesintheworld.name===name))
  }
}