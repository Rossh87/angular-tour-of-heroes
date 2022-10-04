import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {
  @Input() selectedHero: Hero | null = null;

  constructor() {}

  ngOnInit(): void {}
}
