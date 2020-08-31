import { Createhero } from './../CreateHero';
import { SubmitNewService } from './../submit-new.service';
import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submitnew',
  templateUrl: './submitnew.component.html',
  styleUrls: ['./submitnew.component.scss']
})
export class SubmitnewComponent implements OnInit {
  name:string;
  traits:string;
  Backstory:string;

  constructor(private sns: SubmitNewService) { }

  saveHero(){
    this.sns.save({name: this.name, traits: this.traits, Backstory: this.Backstory}).subscribe(result => {
      alert(result);
    })
  }

  ngOnInit(): void {
  }

}
