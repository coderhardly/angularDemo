import { Injectable } from '@angular/core';
import { Hero } from './hero';
import {Heros} from './mock-heros';
import { MessageService} from './message.service';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
     getHeros(): Observable<Hero[]> {
       this.message.add('mess');
       return of(Heros);
      }
      getHero(id: number): Observable<Hero> {
        // TODO: send the message _after_ fetching the hero
        this.message.add(`HeroService: fetched hero id=${id}`);
        return of(Heros.find(hero => hero.id === id));
      }
  constructor(private message: MessageService) { }
}
