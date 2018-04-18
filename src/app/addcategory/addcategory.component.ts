import { Component, OnInit } from '@angular/core';
import { ElementRef, Renderer2 } from '@angular/core';

import { CategoryService } from '../services/category.service'

import { Category } from '../model/category';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})

export class AddcategoryComponent implements OnInit {

  public categories:Category[] = [];

  public newCategory:string = '';

  public category:Category = null;

  public categoryFound:boolean = false;

  public editCategoryFound:boolean = false;

  public editCategoryTitle:string = '';

 constructor(private _categoryService: CategoryService, private element: ElementRef, private renderer: Renderer2) { }

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
      if(category.name.toLowerCase() == this.newCategory.toLowerCase()){
        this.categoryFound = true;
        return;
      }
    });
    if(!this.categoryFound){
      let newCategoryObj: Category = new Category(null,this.newCategory);
      this._categoryService.addCategory(newCategoryObj).subscribe(() => {
        this.newCategory = '';
        this.categories.push(newCategoryObj);
      });
    }
  }

  editCategory(index:number) : void {
    this.renderer.addClass(this.element.nativeElement.querySelector('#edit_'+index),'d-none');
    this.renderer.removeClass(this.element.nativeElement.querySelector('#update_'+index),'d-none');
    this.renderer.removeAttribute(this.element.nativeElement.querySelector('#title_'+index),'readonly');
  }

  updateCategory(index:number) : void {
    this.editCategoryFound = false;
    this.editCategoryTitle = this.element.nativeElement.querySelector('#title_'+index).value;
    this.renderer.addClass(this.element.nativeElement.querySelector('#msg_'+index),'d-none');
    this.categories.forEach(category => {
      if(category.title.toLowerCase() == this.editCategoryTitle.toLowerCase()){
        this.renderer.removeClass(this.element.nativeElement.querySelector('#msg_'+index),'d-none');
        this.editCategoryFound = true;
        return;
      }
    });
    if(!this.editCategoryFound){
      let currentCategory: Category = this.categories[index];
      currentCategory.name = this.editCategoryTitle;
      this._categoryService.editCategory(currentCategory).subscribe(() => {
        this.newCategory = '';
        this.categories.splice(index, 1);
        this.categories.push(currentCategory);
      });
    }
  }

  removeCategory(index:number) : void{
    let currentCategory: Category = this.categories[index];
    this._categoryService.deleteCategory(currentCategory.id).subscribe(() => {
      this.newCategory = '';
      this.categories.splice(index, 1);
    });
  }
}
