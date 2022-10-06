export interface Pokemon {
    name: string;
    url: string;  //ojo con el tipo de dato! Mirarlo en json editor online
}

export interface PokemonResponse {
    count: number;
    next: string;
    previous: string; //ojo con el tipo de dato!
    results: Pokemon[];
}