import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-generations',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './generations.component.html',
  styleUrl: './generations.component.css'
})
export class GenerationsComponent {
  public generations: string[];

  constructor() {
    this.generations = ["Génération I", "Génération II", "Génération III", "Génération IV", "Génération V", "Génération VI", "Génération VII"];
  }

}
