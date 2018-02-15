import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rb-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  recipes = [];
  name = '';
  description = '';

  constructor() { }

  ngOnInit() {
    this.recipes = [
      { name: '2 EGGS-CELLENT EGG SALAD RECIPES', description:'In our family, a fun Easter tradition is coloring and decorating eggs ' },
      { name: '20+ SIZZLING STEAK RECIPES', description:'In our family, a fun Easter tradition is coloring and decorating eggs ' }
    ]
  }

  addItem() {
    this.recipes.push({name: this.name, description: this.description});
    this.name = '';
    this.description = '';
  }

  removeItem(index) {
    this.recipes.splice(index, 1);
  }

}
