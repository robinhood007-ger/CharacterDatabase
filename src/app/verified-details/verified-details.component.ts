import { Observable } from 'rxjs';
import { SubmitNewService } from '../submit-new.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import {Location} from '@angular/common';
import { Createhero } from '../models/CreateHero';

@Component({
  selector: 'app-verified-details',
  templateUrl: './verified-details.component.html',
  styleUrls: ['./verified-details.component.scss']
})
export class VerifiedDetailsComponent implements OnInit {

  @Input() CreateHero: Createhero

  constructor(
    private location:Location,
    private route: ActivatedRoute,
    private sns: SubmitNewService,
  ) { }

  ngOnInit(): void {
    this.fetchDetails()
  }

  goBack(): void{
    this.location.back();
  }

  fetchDetails(): void{
    const id = this.route.snapshot.paramMap.get('id');
    this.sns.getCreatedHero(id)
    .subscribe(CreateHero=>this.CreateHero=CreateHero);
  }

  

}
