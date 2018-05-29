import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { Hero } from './hero';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'api/heroes'; // URL to web api

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.log(`fetched hero id=${id}`);
    return this.http.get<Hero[]>(this.heroesUrl).find(hero => hero.id === id);
  }

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }

  /** GET heroes from the server */
  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.log('fetched heroes');
    return this.http.get<Hero[]>(this.heroesUrl);
  }
}
