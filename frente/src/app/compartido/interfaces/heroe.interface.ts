export interface Heroe {
  id: number;
  name: string;
  image: string;
  alignment: 'good' | 'bad';
  poderes: Poderes;
}

export interface Poderes {
  intelligence: number;
  strength: number;
  speed: number;
  durability: number;
  power: number;
  combat: number;
}

export type Poder = keyof Poderes;