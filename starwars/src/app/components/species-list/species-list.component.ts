import { Component, OnInit } from '@angular/core';
import { Specie } from 'src/app/interfaces/species.interface';

@Component({
  selector: 'app-species-list',
  templateUrl: './species-list.component.html',
  styleUrls: ['./species-list.component.css']
})
export class SpeciesListComponent implements OnInit {

  constructor() { }
  
  specieslist: Specie[]= [];

  ngOnInit(): void {
  }

}
