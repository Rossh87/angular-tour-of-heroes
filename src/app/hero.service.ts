import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { MessageService } from './message.service';

export interface Hero {
  id: number;
  name: string;
}

const mockHeroes: Hero[] = [
  { name: 'Windstorm', id: 1 },
  { name: 'Argus', id: 2 },
  { name: 'Sam', id: 3 },
  { name: 'Ted', id: 4 },
  { name: 'Bill', id: 5 },
];

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private msgService: MessageService) {}

  getHeroes() {
    const hs = of(mockHeroes);
    this.msgService.add('HeroService: fetched heroes');
    return hs;
  }
}
