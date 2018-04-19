import { Workout } from './workout';

export class ActiveWorkout {
  constructor(
    public id: number,
    public workout: Workout,
    public comment: string,
    public startDate: Date,
    public endDate: Date,
    public startTime: Date,
    public endTime: Date,
    public status: boolean
  ) {  }
}
