import { Component, OnInit } from '@angular/core';
import { AsyncLocalStorage } from 'angular-async-local-storage';

import { Category } from './model/category';
import { ActiveWorkout } from './model/activeworkout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(protected localStorage: AsyncLocalStorage) {

  }

  ngOnInit() {

  }
}
