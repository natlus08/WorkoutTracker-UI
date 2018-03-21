import { Component, OnInit } from '@angular/core';
import { AsyncLocalStorage } from 'angular-async-local-storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  private categories: any = [];

  constructor(protected localStorage: AsyncLocalStorage) {

  }

  ngOnInit() {
    this.categories = [{id : 1, title: 'Aerobics'}, {id : 2, title: 'Jogging'}, {id : 3, title: 'Walking'}];
    this.localStorage.setItem('categories', this.categories).subscribe(() => {});
  }
}
