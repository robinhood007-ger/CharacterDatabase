import { Location } from '@angular/common';
import { HeroService } from './../hero.service';
import { ActivatedRoute } from '@angular/router';
import { UltimateStudent } from './../Ultimate';
import { UltimateStuds } from './../DanganronpaCharacters';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-danganronpa-detail',
  templateUrl: './danganronpa-detail.component.html',
  styleUrls: ['./danganronpa-detail.component.scss']
})
export class DanganronpaDetailComponent implements OnInit {
  Ultimatestud:UltimateStudent

  constructor(
    private route: ActivatedRoute,
    private HeroService: HeroService,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.getStud()
  }

  getStud():void{
    const name = this.route.snapshot.paramMap.get('name')
    this.HeroService.getUltimateStud(name)
    .subscribe(Ultimatestud=>this.Ultimatestud=Ultimatestud)
  }

  goBack():void{
    this.location.back();
  }

}
