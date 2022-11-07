import { Component, OnInit } from '@angular/core';
import { Hero, HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private hs: HeroService) {}

  ngOnInit(): void {
    this.hs.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
}
