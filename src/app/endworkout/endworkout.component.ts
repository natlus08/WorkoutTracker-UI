import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { WorkoutService } from '../services/workout.service';

import { Workout } from '../model/workout';
import { ActiveWorkout } from '../model/activeworkout';
import { Category } from '../model/category';

@Component({
  selector: 'app-endworkout',
  templateUrl: './endworkout.component.html',
  styleUrls: ['./endworkout.component.css']
})
export class EndworkoutComponent implements OnInit {

  private selectedId: number;

  private activeWorkout: ActiveWorkout = null;

  private today:Date = new Date();

  private startDate:Date = null;

  private endDate:Date = null;

  private hours:number = 0;

  private minutes:number = 0;

  private year:number = 0;

  private month:number = 0;

  private date:number = 0;

  constructor(private _workoutService: WorkoutService, private route: ActivatedRoute, private router: Router) {
    this.activeWorkout = new ActiveWorkout(null,new Workout(null,'','',0,new Category(null,'')),'',null,null,null,null,false);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.selectedId =  +params['index'];
    });
    this.getActiveWorkout();
  }

  getActiveWorkout() : void{
    this._workoutService.getActiveWorkout().subscribe((data) => {
        this.activeWorkout = data;
        this.activeWorkout.endDate = this.today;
        this.activeWorkout.endTime = this.today;
      }
    );
  }

  /*getArchives(): void{
    this._workoutService.getArchives().subscribe((data) => {
        if(data != null){
          this.archives = data;
        }else{
          this.archives = [];
        }
      }
    );
  }*/

  end() : void {
    this.startDateFormat();
    this.startTimeFormat();
    this.activeWorkout.status = false;
    this._workoutService.endWorkout(this.activeWorkout).subscribe(() => {
      this.router.navigate(['/View']);
    })
  }

  /*archiveObject(): void{
    this.archive.title = this.workout.title;
    this.archive.note = this.workout.note;
    this.archive.startdate = new Date(this.workout.startdate.getFullYear(), this.workout.startdate.getMonth(), this.workout.startdate.getDate(),this.workout.starttime.getHours(), this.workout.starttime.getMinutes(),0);
    this.archive.enddate = new Date(this.workout.enddate.getFullYear(), this.workout.enddate.getMonth(), this.workout.enddate.getDate(),this.workout.endtime.getHours(), this.workout.endtime.getMinutes(),0);
    this.archive.calories = ((this.archive.enddate.getTime() -  this.archive.startdate.getTime())/(1000*60))*this.workout.calories;
  }*/

  startTimeFormat():void {
    let hoursFormat = this.activeWorkout.startTime.toString().substring(0, 2);
    let minutesFormat = this.activeWorkout.startTime.toString().substring(3, 5);
    let secondsFormat = this.activeWorkout.startTime.toString().substring(6, 8);
    this.activeWorkout.startTime = new Date(1970, 0, 1, hoursFormat, minutesFormat, secondsFormat);
  }

  startDateFormat():void {
    let yearFormat = this.activeWorkout.startDate.toString().substring(0, 4);
    let monthFormat = this.activeWorkout.startDate.toString().substring(5, 7);
    let dateFormat = this.activeWorkout.startDate.toString().substring(8, 10);
    this.activeWorkout.startDate = new Date(yearFormat,monthFormat-1,dateFormat, 0, 0, 0);
  }

  timereintialize($event):void {
    this.hours = $event.substring(0, 2);
    this.minutes = $event.substring(3, 5);
    this.activeWorkout.endTime = new Date(1970, 0, 1, this.hours, this.minutes, 0);
  }

  datereintialize($event):void {
    this.year = $event.substring(0, 4);
    this.month = $event.substring(5, 7);
    this.date = $event.substring(8, 10);
    this.activeWorkout.endDate = new Date(this.year,this.month-1,this.date, 0, 0, 0);
  }
}

