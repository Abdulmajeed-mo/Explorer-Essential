import { Component, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-add-task',
  styleUrl: './add-task.css',
  templateUrl: './add-task.html',
})
export class AddTask {
  taskCreated = output();
  back = output<void>();
}