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
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }
   getHeros(): void {
      this.heroService.getHeros()
     .subscribe(heroes => this.heroes = heroes);
   }
   delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
  ngOnInit() {
    this.getHeros();
  }

}
