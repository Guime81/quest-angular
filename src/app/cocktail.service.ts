import { Injectable } from '@angular/core';
import { Cocktail } from 'src/model/cocktail';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  public getCocktails(): Cocktail[] {
    return [
      new Cocktail(
        'Negroni Dominicana',
        40,
        'https://www.1001cocktails.com/wp-content/uploads/1001cocktails/2023/03/121190_origin.jpg'
      ),
      new Cocktail(
        'Cuba libre',
        20,
        'https://www.1001cocktails.com/wp-content/uploads/1001cocktails/2023/03/84246_origin-scaled-615x410.jpg'
      ),
      new Cocktail(
        'Blue Hawaiian',
        25,
        'https://www.1001cocktails.com/wp-content/uploads/1001cocktails/2023/03/81667_origin-scaled-615x410.jpg'
      ),
    ];
  }
}
