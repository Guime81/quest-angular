import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail.service';
import { Cocktail } from 'src/model/cocktail';

@Component({
  selector: 'app-cokctail-list',
  templateUrl: './cokctail-list.component.html',
  styleUrls: ['./cokctail-list.component.css'],
})
export class CokctailListComponent implements OnInit {
  constructor(public cocktailsService: CocktailService) {}
  cocktails: Cocktail[] = [];

  ngOnInit(): void {
    this.cocktailsService.getCocktails().subscribe((cocktailsFromJsonFile) => {
      this.cocktails = cocktailsFromJsonFile;
    });
  }
}
