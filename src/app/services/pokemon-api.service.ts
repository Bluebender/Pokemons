import { Injectable } from '@angular/core';
import {Pokemon} from "../models/pokemon";

@Injectable({
  providedIn: 'root'
})
export class PokemonApiService {
  public pokemons: Array<Pokemon>;

  constructor() {
    this.pokemons = [
      {
        id: 1,
        name: "Bulbizarre",
        category: "graine",
        type: ["plante", "poison"],
        height: "",
        weight: "6.9"
      },
      {
        id: 2,
        name: "Herbizarre",
        category: "graine",
        type: ["plante", "poison"],
        height: "1.00",
        weight: "13"
      },
      {
        id: 3,
        name: "Florizarre",
        category: "graine",
        type: ["plante", "poison"],
        height: "2.00",
        weight: "100"
      },
      {
        id: 4,
        name: "Salamèche",
        category: "lézard",
        type: ["feu"],
        height: "0.60",
        weight: "8.5"
      },
      {
        id: 5,
        name: "Reptincel",
        category: "flamme",
        type: ["feu"],
        height: "1.10",
        weight: "19"
      },
      {
        id: 6,
        name: "Dracaufeu",
        category: "flamme",
        type: ["feu"],
        height: "1.70",
        weight: "90.5"
      }
    ]
  }

  public getAllPokemons(): Pokemon[] {
    return this.pokemons;

  }
}
