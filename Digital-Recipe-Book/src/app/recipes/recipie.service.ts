import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

export class RecipeService {

    recipieSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Apple Pie 1', 'It is a Desert', 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Apple_pie.jpg'),
        new Recipe('Apple Pie 2', 'It is a Desert', 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Apple_pie.jpg')
      ];

    getRecipies() {
        return this.recipes.slice();
    }
}
