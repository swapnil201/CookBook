import { Component, OnInit, OnChanges } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  selectedRecipe: Recipe;
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipeEmitted: Recipe) {
    this.selectedRecipe = recipeEmitted;
  }
}
