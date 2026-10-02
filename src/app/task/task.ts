import { Component, Input, output } from '@angular/core';
import { Task as TaskModel } from '../task.model';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  
  @Input({ required: true }) name!: string;

  @Input({ required: true }) tasks!: TaskModel[];

 openAddTask = output<void>();
completeTask = output<number>();
deleteTask = output<number>();
}