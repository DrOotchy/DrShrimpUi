import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-addrecipe',
  templateUrl: './addrecipe.component.html',
  styleUrls: ['./addrecipe.component.css']
})
export class AddrecipeComponent implements OnInit {
  recipe = {
    name: '',
    url: '',
    description: '',
    category: ''
  }

  constructor(private recipeService: RecipeService, private router: Router) { }

  ngOnInit(): void {
  }
  newRecipe(formObj){
    this.recipeService.createRecipe(formObj).subscribe(res => {
      this.router.navigate(['/recipesdetails/' + res._id]);

    } )

  }
}
