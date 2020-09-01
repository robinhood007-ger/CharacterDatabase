import { Magic } from './../Magic';
import { HeroService } from './../hero.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-magic-types-detail',
  templateUrl: './magic-types-detail.component.html',
  styleUrls: ['./magic-types-detail.component.scss'],
})
export class MagicTypesDetailComponent implements OnInit {
  magictype: Magic;

  constructor(
    private HeroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getMagicType();
  }

  getMagicType(): void {
    const name = this.route.snapshot.paramMap.get('name');
    this.HeroService.getMagicType(name).subscribe(
      (magictype) => (this.magictype = magictype)
    );
  }

  goBack(): void {
    this.location.back();
  }
}
