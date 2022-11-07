import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {
  hero: Hero | null = null;

  constructor(
    private hs: HeroService,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.hs
      .getHeroes()
      .subscribe((heroes) => (this.hero = heroes.find((h) => h.id === id)!));
  }

  update(name: string) {
    if (this.hero === null) return;

    this.hs.update(this.hero.id, name);
  }
}
