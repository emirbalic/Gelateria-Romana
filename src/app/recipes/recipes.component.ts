import { Component, OnInit, AfterContentInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit, AfterContentInit {
  selectedRecipe: Recipe;

  constructor() { }

  ngOnInit() {
  }
  ngAfterContentInit() {
  }
}
