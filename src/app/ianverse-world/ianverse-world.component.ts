import { HeroService } from '../hero.service';
import { place } from '../models/place';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ianverse-world',
  templateUrl: './ianverse-world.component.html',
  styleUrls: ['./ianverse-world.component.scss'],
})
export class IanverseWorldComponent implements OnInit {
  placesintheworld: place[];

  constructor(private heroservice: HeroService) {}

  ngOnInit(): void {
    this.getplaces();
  }

  getplaces(): void {
    this.heroservice
      .getPlaces()
      .subscribe(
        (placesintheworld) => (this.placesintheworld = placesintheworld)
      );
  }
}
