import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  allRecipies: any;
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.getsortedRecipe();
  }
  getAllRecipe() {
    this.recipeService.getAllRecipies().subscribe(data => {
      this.allRecipies = data;
    });
  }
  getsortedRecipe() {
    this.recipeService.getSortedRecipies().subscribe(data => {
      this.allRecipies = data;
    });
  }
}
