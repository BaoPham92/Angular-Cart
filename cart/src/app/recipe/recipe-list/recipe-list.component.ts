import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test title of the recipe constructor', 'Recipe description for vegan butternut squash soup', 'http://vegangela.com/wp-content/uploads/2011/05/IMG_6615_1000.jpg')
  ];

  ngOnInit() {
  }

}
