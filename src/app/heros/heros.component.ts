import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  constructor(private heroService: HeroService) {
   }

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  heroes: Hero [];

   getHeros(): void {
      this.heroService.getHeros()
     .subscribe(heroes => this.heroes = heroes);
   }
  ngOnInit() {
    this.getHeros();
  }

}
