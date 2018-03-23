import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { WorkoutService } from '../services/workout.service';

import { Workout } from '../model/workout';

@Component({
  selector: 'app-startworkout',
  templateUrl: './startworkout.component.html',
  styleUrls: ['./startworkout.component.css']
})
export class StartworkoutComponent implements OnInit {

  private workout:Workout = null;

  private workouts:Workout[] = [];

  private selectedId: number;

  constructor(private _workoutService: WorkoutService, private route: ActivatedRoute, private router: Router) {
    this.workout = new Workout('','',0,'',null,null,null,null,false);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.selectedId =  +params['index'];
    });
    this.getWorkouts();
  }

  getWorkouts() : void{
    this._workoutService.getWorkouts().subscribe((data) => {
        this.workouts = data;
        this.workout = this.workouts[this.selectedId];
        this.workout.startdate = new Date();
        this.workout.starttime = new Date();
      }
    );
  }

  start() : void {
    this.workout.started = true;
    this.workouts[this.selectedId] = this.workout;
    this._workoutService.addWorkout(this.workouts).subscribe(() => {
      this.router.navigate(['/View']);
    });
  }

  cancel() : void{
    this.router.navigate(['/View']);
  }
}
