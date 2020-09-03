import { UltimateStudent } from './../models/Ultimate';
import { HeroService } from '../hero.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-danganronpa',
  templateUrl: './danganronpa.component.html',
  styleUrls: ['./danganronpa.component.scss'],
})
export class DanganronpaComponent implements OnInit {
  ultimatestuds: UltimateStudent[];
  ultimatestudsWIP: UltimateStudent[];

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getUltimateStuds();
    this.getUltimateStudsWIP();
  }

  getUltimateStuds(): void {
    this.heroService
      .getUltimateStuds()
      .subscribe((ultimatestuds) => (this.ultimatestuds = ultimatestuds));
  }
  getUltimateStudsWIP(): void{
    this.heroService.getUltimateStudsWIP().subscribe((ultimatestudsWIP)=>(this.ultimatestudsWIP = ultimatestudsWIP))
  }
}
