import { Component, OnInit } from '@angular/core';

import { WorkoutService } from '../services/workout.service';

import { Workout } from '../model/workout';
import { Archive } from '../model/archive';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {

  private archive: Archive = null;

  private archives:Archive[] = [];

  private dataAvailable:boolean = true;

  private today:Date = new Date();

  private todaysWO:number = 0;

  private weeksWO:number = 0;

  private monthsWO:number = 0;

  private days:number = 0;

  private minutes:number = 0

  constructor(private _workoutService: WorkoutService) { }

  ngOnInit() {
    this.dataAvailable = true;
    this.getArchives();
  }

  getArchives(): void{
    this._workoutService.getArchives().subscribe((data) => {
        if(data != null){
          this.archives = data;
          this.calculateWOMinutes();
        }else{
          this.dataAvailable = false;
        }
      }
    );
  }

  calculateWOMinutes(): void{
    this.archives.forEach(archive => {
      this.days = Math.ceil((Math.abs(this.today.getTime() - archive.enddate.getTime())) / (1000 * 3600 * 24));
      this.minutes = Math.ceil((Math.abs(archive.enddate.getTime() - archive.startdate.getTime())) / (1000 * 60));
      if(this.days == 1){
        this.todaysWO = this.todaysWO + this.minutes;
      }
      if(this.days <= 7){
        this.weeksWO = this.weeksWO + this.minutes;
      }
      if(this.days <= 30){
        this.monthsWO = this.monthsWO + this.minutes;
      }
    })
  }

}
