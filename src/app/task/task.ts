import { Component, Input, output } from '@angular/core';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {

  @Input({ required: true }) name!: string;

  openAddTask = output<void>();

}