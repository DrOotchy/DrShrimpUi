import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../../../services/recipe.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  recipe: any;
  ingredients: any [];
  constructor(private recipeService: RecipeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getbyId();
  }
  getbyId() {
    return this.recipeService.getbyId(this.route.snapshot.params.id)
      .subscribe(res => {
        this.recipe = res,
        this.ingredients = res.ingredients,
      console.log(this.recipe),
      console.log(this.ingredients)
      });
  }
}
