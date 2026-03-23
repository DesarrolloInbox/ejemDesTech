import { Component, computed, input } from '@angular/core';
import { Heroe, Poder } from '../../compartido/interfaces/heroe.interface';

@Component({
  selector: 'app-articulo-heroe',
  imports: [],
  templateUrl: './articulo-heroe.html',
  styleUrl: './articulo-heroe.css',
})
export class ArticuloHeroe {
  heroe = input.required<Heroe>()

  esVillano = computed(() => this.heroe().alignment === 'bad')

  decrementaPoder (poder: Poder){
    const valor = this.heroe().poderes[poder]
    if (valor > 0 ){
      this.heroe().poderes[poder]--;
    }
  }

  incrementaPoder (poder: Poder){
    const valor = this.heroe().poderes[poder]
    if (valor < 100 ){
      this.heroe().poderes[poder]++;
    }
  }
}
