import { HeroService } from './../hero.service';
import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  heroWIP: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
    this.getHeroWIP();
  }

  getHero(): void {
    const name = this.route.snapshot.paramMap.get('name');
    this.heroService.getHero(name).subscribe((hero) => (this.hero = hero));
  }

  getHeroWIP(): void {
    const name = this.route.snapshot.paramMap.get('name');
    this.heroService
      .getHeroWIP(name)
      .subscribe((heroWIP) => (this.heroWIP = heroWIP));
  }

  goBack(): void {
    this.location.back();
  }
}
