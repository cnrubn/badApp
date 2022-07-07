import { Component, OnInit } from '@angular/core';
import { BadInterface } from '../interfaces/bad-interfaces';
import { BadService } from '../services/bad.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  charactersBad: BadInterface[] = [];
  charactersBadSearch: BadInterface[] = [];

  constructor( private badService: BadService ) { 

    this.badService.getBad()
    .subscribe( data => {

      this.charactersBad = data;
      // console.log( this.charactersBad );


      this.charactersBad = data.map( resp => {
        return {
          char_id: resp.char_id,
          img: resp.img,
          status: resp.status,
          name: resp.name,
          portrayed: resp.portrayed,
          occupation: resp.occupation,
        }
      })
      
      console.log( this.charactersBad );
      
      this.charactersBadSearch = this.charactersBad;
      
      
    });
    
    
    console.log( 'fuera: ', this.charactersBad );
  }

  ngOnInit(): void {
  }

  filtro( event: any ){

  
    
    const search: string = event.target.value;

    console.log({ search });


    this.charactersBad = this.charactersBadSearch?.filter(({ name }: BadInterface) => {
      return name.toLowerCase().includes(search.toLowerCase());
    }) 

  }

}
