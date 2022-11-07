import { Component, OnInit } from '@angular/core';
import { Hero, HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  styleUrls: ['./heroes.component.css'],
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {
  selectedHero: null | Hero = null;
  heroes: Hero[] = [];

  constructor(
    private heroService: HeroService,
    private msgService: MessageService
  ) {}

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe((hs) => (this.heroes = hs));
  }
}
