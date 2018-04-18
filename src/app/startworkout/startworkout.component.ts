import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { WorkoutService } from '../services/workout.service';

import { ActiveWorkout } from '../model/activeworkout';

@Component({
  selector: 'app-startworkout',
  templateUrl: './startworkout.component.html',
  styleUrls: ['./startworkout.component.css']
})
export class StartworkoutComponent implements OnInit {

  private activeWorkout:ActiveWorkout = null;

  private selectedId: number;

  private hours:number = 0;

  private minutes:number = 0;

  private year:number = 0;

  private month:number = 0;

  private date:number = 0;

  private today:Date = new Date();

  constructor(private _workoutService: WorkoutService, private route: ActivatedRoute, private router: Router) {
    this.activeWorkout =  new ActiveWorkout(null,null,'',null,null,null,null,false);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.selectedId =  +params['index'];
    });
    this.prepWorkout();
  }

  prepWorkout() : void{
    this._workoutService.getWorkout(this.selectedId).subscribe((data) => {
        //this.workout = data;
        //this.workout = this.workouts[this.selectedId];
        this.activeWorkout.workout = data;
        this.activeWorkout.startdate = this.today;
        this.activeWorkout.starttime = this.today;
      }
    );
  }

  start() : void {
    this.activeWorkout.status = true;
    //this.workouts[this.selectedId] = this.workout;
    this._workoutService.startWorkout(this.activeWorkout).subscribe(() => {
      this.router.navigate(['/View']);
    });
  }

  cancel() : void{
    this.router.navigate(['/View']);
  }

  timereintialize($event):void {
    this.hours = $event.substring(0, 2);
    this.minutes = $event.substring(3, 5);
    this.activeWorkout.starttime = new Date(1970, 0, 1, this.hours, this.minutes, 0);
  }

  datereintialize($event):void {
    this.year = $event.substring(0, 4);
    this.month = $event.substring(5, 7);
    this.date = $event.substring(8, 10);
    this.activeWorkout.startdate = new Date(this.year,this.month-1,this.date, 0, 0, 0);
  }
}
