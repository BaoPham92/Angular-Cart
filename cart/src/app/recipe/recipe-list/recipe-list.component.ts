import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test title of the recipe constructor', 'Recipe description for vegan butternut squash soup', 'http://vegnews.com/web/uploads/asset/590/file/vegan.jpg')
  ];

  ngOnInit() {
  }

}
