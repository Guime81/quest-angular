import { Injectable } from '@angular/core';
import { Cocktail } from 'src/model/cocktail';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  constructor(public http: HttpClient) {}

  getCocktails(): Observable<Cocktail[]> {
    return this.http.get<Cocktail[]>('assets/cocktails.json');
  }
}
