import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-datail.component.html',
  styleUrls: ['./hero-datail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;

  constructor( private route: ActivatedRoute,
               private heroService: HeroService,
               private location: Location) { }

               ngOnInit(): void {
                this.getHero();
              }
              getHero(): void {
                const id = +this.route.snapshot.paramMap.get('id');
                this.heroService.getHero(id)
                  .subscribe(hero => this.hero = hero);
              }
              goBack(): void {
                this.location.back();
              }

}
