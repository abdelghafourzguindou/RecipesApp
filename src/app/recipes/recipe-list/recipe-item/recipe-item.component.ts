import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;
  @Input() index: number;

  ngOnInit(): void {
  }

  printDetail() {
    return this.recipe.description.length < 110 ? this.recipe.description : this.recipe.description.substring(0, 107) + '...';
  }
}
