import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
    ingredients: Ingredient[] = [
        new Ingredient('apple', 5),
        new Ingredient('apple', 5)
      ];

    getIngredient() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
    }
}
