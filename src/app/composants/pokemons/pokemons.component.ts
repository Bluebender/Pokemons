import {Component} from '@angular/core';
import {Pokemon} from "../../models/pokemon";
import {NgForOf, NgIf} from "@angular/common";
import {PokemonApiService} from "../../services/pokemon-api.service";

@Component({
  selector: 'app-pokemons',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.css'
})
export class PokemonsComponent {
  public pokemons: Pokemon[]
  public pokemonLenght: number | undefined;

  constructor(public pokemonApi : PokemonApiService) {
    this.pokemons = []
    this.getAllPokemons()
    this.getPokemonLenght()
  }

  getAllPokemons() {
    this.pokemons = this.pokemonApi.getAllPokemons()
  }
  getPokemonLenght(){
    this.pokemonLenght = this.pokemons.length
  }
}
