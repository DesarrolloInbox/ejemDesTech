import { Component } from '@angular/core';
import { ArticuloHeroe } from "../articulo-heroe/articulo-heroe";
import { Heroe } from '../../compartido/interfaces/heroe.interface';

@Component({
  selector: 'app-lista-heroes',
  imports: [ArticuloHeroe],
  templateUrl: './lista-heroes.html',
  styleUrl: './lista-heroes.css',
})
export class ListaHeroes {
  public heroes: Heroe[] = [
    {
    id: 1,
    name: 'A-Bomb',
    image:
      'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/1-a-bomb.jpg',
    alignment: 'good',
    poderes: {
      intelligence: 38,
      strength: 100,
      speed: 17,
      durability: 80,
      power: 24,
      combat: 64,
    },
  },
  {
    id: 2,
    name: 'Abe Sapien',
    image:
      'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/2-abe-sapien.jpg',
    alignment: 'good',
    poderes: {
      intelligence: 88,
      strength: 28,
      speed: 35,
      durability: 65,
      power: 100,
      combat: 85,
    },
  },
  {
    id: 3,
    name: 'Abin Sur',
    image:
      'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/3-abin-sur.jpg',
    alignment: 'good',
    poderes: {
      intelligence: 50,
      strength: 90,
      speed: 53,
      durability: 64,
      power: 99,
      combat: 65,
    },
  }
]
}
