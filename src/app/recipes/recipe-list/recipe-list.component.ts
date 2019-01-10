import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() selectedRecipe = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Gelato Chocolato', 'Gelato Romano', 'https://images.unsplash.com/photo-1447195047884-0f014b0d9288?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60'),
    new Recipe('Gelato Vanilla', 'Gelato Napolitano', 'https://images.unsplash.com/photo-1495747895702-efcc225f9c22?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60')
  ];

  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe: Recipe) {
    this.selectedRecipe.emit(recipe);
  }
}
