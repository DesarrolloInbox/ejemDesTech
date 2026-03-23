import { Component } from '@angular/core';
import { Heroe, Poder } from '../../compartido/interfaces/heroe.interface';

@Component({
  selector: 'app-articulo-heroe',
  imports: [],
  templateUrl: './articulo-heroe.html',
  styleUrl: './articulo-heroe.css',
})
export class ArticuloHeroe {
  heroe: Heroe = {
    id: 620,
    name: 'Spider-Man',
    image:
      'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/620-spider-man.jpg',
    alignment: 'good',
    poderes: {
      intelligence: 90,
      strength: 55,
      speed: 67,
      durability: 75,
      power: 74,
      combat: 85,
    },
  }

  esVillano = this.heroe.alignment === 'bad'

  decrementaPoder (poder: Poder){
    const valor = this.heroe.poderes[poder]
    if (valor > 0 ){
      this.heroe.poderes[poder]--;
    }
  }

  incrementaPoder (poder: Poder){
    const valor = this.heroe.poderes[poder]
    if (valor < 100 ){
      this.heroe.poderes[poder]++;
    }
  }
}
