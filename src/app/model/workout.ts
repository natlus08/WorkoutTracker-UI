import { Category } from './model/category';

export class Workout {
  constructor(
    public id: number,
    public title: string,
    public note: string,
    public caloriesBurnt: number,
    public category: Category
  ) {  }
}
