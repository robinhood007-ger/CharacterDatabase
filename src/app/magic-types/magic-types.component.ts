import { Magic } from './../Magic';
import { HeroService } from './../hero.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-magic-types',
  templateUrl: './magic-types.component.html',
  styleUrls: ['./magic-types.component.scss']
})
export class MagicTypesComponent implements OnInit {
  magictypes:Magic[]

  constructor(
    private HeroService:HeroService
  ) { }

  ngOnInit(): void {
    this.getMagicTypes();
  }
  getMagicTypes():void{
    this.HeroService.getMagicTypes()
    .subscribe(magictypes=>this.magictypes=magictypes)
  }

}
