import { Component, OnInit } from '@angular/core';

import { CategoryService } from '../services/category.service';
import { WorkoutService } from '../services/workout.service'

import { Category } from '../model/category';
import { Workout } from '../model/workout';

@Component({
  selector: 'app-addworkout',
  templateUrl: './addworkout.component.html',
  styleUrls: ['./addworkout.component.css']
})
export class AddworkoutComponent implements OnInit {

  public categories:Category[] = [];

  public workout:Workout = null;

  private workouts:Workout[] = [];

  private workoutFound:boolean = false;

  constructor(private _categoryService: CategoryService, private _workoutService: WorkoutService) {
    this.workout = new Workout('','',0,'');
  }

  ngOnInit() {
    this.getCategories();
    this.getWorkouts();
  }

  getCategories() : void{
    this._categoryService.getCategories().subscribe((data) => {
        this.categories = data;
      }
    );
  }

  getWorkouts() : void{
    this._workoutService.getWorkouts().subscribe((data) => {
        this.workouts = data;
      }
    );
  }

  addworkout() : void{
    this.workoutFound = false;
    this.workouts.forEach(workout => {
      console.log(workout.title.toLowerCase()+'----'+this.workout.title.toLowerCase());
      if(workout.title.toLowerCase() == this.workout.title.toLowerCase()){
        this.workoutFound = true;
        return;
      }
    });
    if(!this.workoutFound){
      this.workouts.push(this.workout);
      this._workoutService.addWorkout(this.workouts).subscribe(() => {

      });
    }
  }

  increment() : void{
    this.workout.calories = this.workout.calories + 0.1;
  }

  decrement() : void{
    this.workout.calories = (this.workout.calories > 0.1) ? (this.workout.calories - 0.1) : this.workout.calories;
  }

}
