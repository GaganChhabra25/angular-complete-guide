import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Manchurian recipe", "This is so delicious", "https://www.foodvedam.com/wp-content/uploads/2017/10/Veg-Manchurian.jpg")
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
