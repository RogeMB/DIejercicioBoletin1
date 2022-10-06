import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import {PokemonResponse} from '../interfaces/pokemon-response.interface'

const API_BASE_URL = 'https://pokeapi.co/api/v2'

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  public pokemonList(): Observable<PokemonResponse> {  //dato asíncrono, es decir, que se queda esperando al momento que llegue el dato para saber qué tipo es
    return this.http.get<PokemonResponse>(`${API_BASE_URL}/pokemon`);  //hay que especificarlo aquí también. Un json pasado a objeto primero y luego el observable entra en acción
    //return this.http.get(API_BASE_URL.concat("/pokemon"))
  }

  public getPokemon(id:string){
    return this.http.get(`${API_BASE_URL}/id`);
     //return this.http.get(API_BASE_URL.concat("/id"))
  }
}
