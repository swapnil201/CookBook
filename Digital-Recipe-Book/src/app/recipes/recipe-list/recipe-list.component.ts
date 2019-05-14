import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Apple Pie 1', 'It is a Desert','https://upload.wikimedia.org/wikipedia/commons/4/4b/Apple_pie.jpg'),
    new Recipe('Apple Pie 2', 'It is a Desert','https://upload.wikimedia.org/wikipedia/commons/4/4b/Apple_pie.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
