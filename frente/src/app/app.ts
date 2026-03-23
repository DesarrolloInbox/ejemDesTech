import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticuloHeroe } from "./componentes/articulo-heroe/articulo-heroe";
import { ListaHeroes } from "./componentes/lista-heroes/lista-heroes";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListaHeroes],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
