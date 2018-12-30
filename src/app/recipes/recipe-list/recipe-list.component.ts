import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Gelato Chocolato', 'Gelato Buonissimo Romano', 'https://cdn.pixabay.com/photo/2016/10/31/18/14/ice-1786311__480.jpg'),
    new Recipe('Gelato Vanilla', 'Gelato Buonissimo Napolitano', 'https://cdn.pixabay.com/photo/2018/08/16/22/59/ice-3611698__480.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
