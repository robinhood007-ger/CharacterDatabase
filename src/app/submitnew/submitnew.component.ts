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
  magicTypes:string;
  Abilities:string;
  Songinspired:string;
  CreatedHeros:Createhero[];

  constructor(private sns: SubmitNewService) { }

  getAll(){
    this.sns.get().subscribe(result=>{
      this.CreatedHeros=result
    })
  }

    DeleteHero(id: string){
      this.sns.delete(id).subscribe(()=> {
        this.getAll()
      })
    }

    saveHero(){
      this.sns.save({name: this.name, traits: this.traits, Backstory: this.Backstory, magicTypes: this.magicTypes, Abilities: this.Abilities, SongInspired:this.Songinspired}).subscribe(() => {
        this.getAll()
      })
    }

  ngOnInit(): void {
    this.getAll();
  }

  deleteAll(name:string){
    this.sns.deleteAll(name).subscribe(()=>{
      this.getAll()
    })
  }

}
