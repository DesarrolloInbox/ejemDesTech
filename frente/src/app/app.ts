import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticuloHeroe } from "./componentes/articulo-heroe/articulo-heroe";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ArticuloHeroe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('borrameangular');
}
