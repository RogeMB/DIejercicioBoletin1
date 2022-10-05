import { Component, OnInit } from '@angular/core';
import {PokemonService} from 'src/app/pokemonserv.service'

@Component({
  selector: 'app-pokemonlist',
  templateUrl: './pokemonlist.component.html',
  styleUrls: ['./pokemonlist.component.css']
})
export class PokemonlistComponent implements OnInit {

  listadoPokemon: Pokemon[] = [];

  constructor(pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.pokemonList().subscribe(response => {
      this.listadoPokemon = response.results;
    });
  }
}
