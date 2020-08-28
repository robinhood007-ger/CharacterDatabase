import { place } from './../place';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from './../hero.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ianverse-world-detail',
  templateUrl: './ianverse-world-detail.component.html',
  styleUrls: ['./ianverse-world-detail.component.scss']
})
export class IanverseWorldDetailComponent implements OnInit {
  place:place

  constructor(
    private HeroService:HeroService,
    private location: Location,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getPlace()
  }

  getPlace():void{
    const name= this.route.snapshot.paramMap.get('name')
    this.HeroService.getPlace(name)
    .subscribe(place=>this.place=place)
  }

  goBack(): void{
    this.location.back();
  }



}
