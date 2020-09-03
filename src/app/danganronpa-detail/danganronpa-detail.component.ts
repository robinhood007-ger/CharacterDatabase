import { UltimateStudent } from './../models/Ultimate';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';
import { ActivatedRoute } from '@angular/router';
import { UltimateStuds } from '../Hardcode/DanganronpaCharacters';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-danganronpa-detail',
  templateUrl: './danganronpa-detail.component.html',
  styleUrls: ['./danganronpa-detail.component.scss'],
})
export class DanganronpaDetailComponent implements OnInit {
  Ultimatestud: UltimateStudent;
  UltimatestudWIP: UltimateStudent

  constructor(
    private route: ActivatedRoute,
    private HeroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getStud();
    this.getStudWIP();
  }

  getStud(): void {
    const name = this.route.snapshot.paramMap.get('name');
    this.HeroService.getUltimateStud(name).subscribe(
      (Ultimatestud) => (this.Ultimatestud = Ultimatestud)
    );
  }

  getStudWIP():void{
    const name= this.route.snapshot.paramMap.get('name');
    this.HeroService.getUltimateStudWIP(name).subscribe(
      (UltimatestudWIP)=>(this.UltimatestudWIP = UltimatestudWIP)
    )
  }

  goBack(): void {
    this.location.back();
  }
}
