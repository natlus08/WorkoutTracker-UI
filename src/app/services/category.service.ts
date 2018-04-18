import { Injectable } from '@angular/core';
import { AsyncLocalStorage } from 'angular-async-local-storage';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Category } from '../model/category';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const api = {
  url: 'http://localhost:8080/tracker/api/'
}

@Injectable()
export class CategoryService {

  constructor(private http:HttpClient) { }

  getCategories():Observable<Category[]>{
    return this.http.get<Category[]>(api.url+'categories');
  }

  addCategory(category:Category):Observable<Category>{
    let body = JSON.stringify(category);
    return this.http.post<Category>(api.url+'categories',category,httpOptions);
  }

  editCategory(category:Category):Observable<Category>{
    let body = JSON.stringify(category);
    return this.http.put<Category>(api.url+'categories',category,httpOptions);
  }

  deleteCategory(id:number):Observable<>{
    return this.http.delete(api.url+'categories/'+id);
  }

}
