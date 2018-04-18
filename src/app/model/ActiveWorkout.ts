import { Workout } from './model/workout';

export class ActiveWorkout {
  constructor(
    public id: number,
    public workout: Workout,
    public comment: string,
    public startdate: Date,
    public enddate: Date,
    public starttime: Date,
    public endtime: Date,
    public status: boolean
  ) {  }
}
