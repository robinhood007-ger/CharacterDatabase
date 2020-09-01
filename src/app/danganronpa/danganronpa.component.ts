import { HeroService } from './../hero.service';
import { UltimateStudent } from './../Ultimate';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-danganronpa',
  templateUrl: './danganronpa.component.html',
  styleUrls: ['./danganronpa.component.scss'],
})
export class DanganronpaComponent implements OnInit {
  ultimatestuds: UltimateStudent[];

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getUltimateStuds();
  }

  getUltimateStuds(): void {
    this.heroService
      .getUltimateStuds()
      .subscribe((ultimatestuds) => (this.ultimatestuds = ultimatestuds));
  }
}
