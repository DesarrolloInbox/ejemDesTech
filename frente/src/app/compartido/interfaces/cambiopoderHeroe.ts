import { Heroe, Poder } from "./heroe.interface";

export interface CambioPoderHeroe {
  heroe: Heroe;
  poder: Poder;
  valor: number;
}