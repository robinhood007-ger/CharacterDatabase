import { Component, OnInit } from '@angular/core';

import {Hero} from '../models/hero';
import {HeroService} from '../hero.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  heroesWIP: Hero[];

  constructor(
    private heroService: HeroService,
  ) { }

  ngOnInit(): void {
    this.getHeroes();
    this.getHeroesWIP();
  }

  getHeroes():void{
    this.heroService.getHeroes()
    .subscribe(heroes=>this.heroes=heroes)
  }
  getHeroesWIP():void{
    this.heroService.getHeroesWIP()
    .subscribe(heroesWIP=>this.heroesWIP=heroesWIP)
  }

}
