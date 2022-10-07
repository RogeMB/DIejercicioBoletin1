import { Component, OnInit } from '@angular/core';
import {PokemonService} from 'src/app/services/pokemon.service'
import {Pokemon} from 'src/app/interfaces/pokemon-response.interface'

@Component({
  selector: 'app-pokemonlist',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  listadoPokemon: Pokemon[] = [];

  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;



  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.pokemonList().subscribe(response => {
      this.listadoPokemon = response.results; //Aquí estoy agregando los pokemons a la lista según la respuesta que le está llegando
      this.getPokemonsComp();
      //this.pokemonService.getPokemon(this.getRandomInt())
    });
  }

  getRandomInt(){
    var max= 151;
    var min=1;
    var num = Math.floor(Math.random() * (max - min)) + min;
    return num;
  }

  getPokemonsComp(){
    for (let index = 1; index <= 150; index++){
      this.pokemonService.getPokemon(index).subscribe(
        response=> {
          
        },
        error=>{

        }
      )
    }
  }
}