import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { WorkoutService } from '../services/workout.service';

import { Workout } from '../model/workout';

@Component({
  selector: 'app-endworkout',
  templateUrl: './endworkout.component.html',
  styleUrls: ['./endworkout.component.css']
})
export class EndworkoutComponent implements OnInit {

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
        this.workout.enddate = new Date();
        this.workout.endtime = new Date();
      }
    );
  }

  end() : void {
    this.workout.started = false;
    this.workouts[this.selectedId] = this.workout;
    this._workoutService.addWorkout(this.workouts).subscribe(() => {
      this.router.navigate(['/View']);
    });
  }
}

