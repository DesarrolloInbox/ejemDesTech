import { Component, computed, input, output } from '@angular/core';
import { Heroe, Poder } from '../../compartido/interfaces/heroe.interface';
import { CambioPoderHeroe } from '../../compartido/interfaces/cambiopoderHeroe';

@Component({
  selector: 'app-articulo-heroe',
  imports: [],
  templateUrl: './articulo-heroe.html',
  styleUrl: './articulo-heroe.css',
})
export class ArticuloHeroe {
  heroe = input.required<Heroe>()
  poderCambio = output<CambioPoderHeroe>()

  esVillano = computed(() => this.heroe().alignment === 'bad')

  decrementaPoder (poder: Poder){
    this.poderCambio.emit({heroe: this.heroe(), poder, valor: -1})
  }

  incrementaPoder (poder: Poder){
    this.poderCambio.emit({heroe: this.heroe(), poder, valor: 1})
  }
}
