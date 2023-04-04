import { Component } from '@angular/core';
import { CocktailService } from '../cocktail.service';
import { Cocktail } from 'src/model/cocktail';

@Component({
  selector: 'app-cokctail-list',
  templateUrl: './cokctail-list.component.html',
  styleUrls: ['./cokctail-list.component.css'],
})
export class CokctailListComponent {
  cocktails: Cocktail[];
  constructor(public cocktailsService: CocktailService) {
    this.cocktails = cocktailsService.getCocktails();
  }
}
