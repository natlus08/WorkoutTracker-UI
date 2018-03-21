import { Component, OnInit } from '@angular/core';

import { CategoryService } from '../services/category.service'

import { Category } from '../model/category';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})

export class AddcategoryComponent implements OnInit {

  public categories:any = [];

  public newCategory:string = '';

  public category:Category = null;

  public categoryFound:boolean = false;

  constructor(private _categoryService: CategoryService) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() : void{
    this._categoryService.getCategories().subscribe((data) => {
        this.categories = data;
      }
    );
  }

  addCategory() : void{
    this.categoryFound = false;
    this.categories.forEach(category => {
      if(category.title.toLowerCase() == this.newCategory.toLowerCase()){
        this.categoryFound = true;
        return;
      }
    });
    if(!this.categoryFound){
      this.categories.push(new Category(this.newCategory));
      this._categoryService.addCategory(this.categories).subscribe(() => {
        this.newCategory = '';
      });
    }
  }

  editCategory(index:number) : void {

  }

  updateCategory(index:number) : void {

  }

  removeCategory(index:number) : void{
    this.categories.splice(index, index);
    this._categoryService.addCategory(this.categories).subscribe(() => {
      this.newCategory = '';
    });
  }
}
