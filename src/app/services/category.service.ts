import { Injectable } from '@angular/core';
import { AsyncLocalStorage } from 'angular-async-local-storage';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Category } from '../model/category';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type, Accept, Origin, Authorization',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
  })
};

const api = {
  url: 'http://localhost:8080/tracker/api/'
}

@Injectable()
export class CategoryService {

  constructor(private http:HttpClient) { }

  getCategories():Observable<Category[]>{
    return this.http.get<Category[]>(api.url+'categories', httpOptions);
  }

  addCategory(category:Category):Observable<Category>{
    let body = JSON.stringify(category);
    return this.http.post<Category>(api.url+'category', category, httpOptions);
  }

  editCategory(category:Category):Observable<Category>{
    let body = JSON.stringify(category);
    return this.http.put<Category>(api.url+'category', category, httpOptions);
  }

  deleteCategory(id:number):Observable<any>{
    return this.http.delete(api.url+'category/'+id, httpOptions);
  }

}
