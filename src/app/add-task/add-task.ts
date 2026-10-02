import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../task.model';

@Component({
  imports: [FormsModule],
  selector: 'app-add-task',
  styleUrl: './add-task.css',
  templateUrl: './add-task.html',
})
export class AddTask {
  userId = input.required<number>();

  taskCreated = output<Task>();
  back = output<void>();

  title = '';
  date = '';
  description = '';

  onSubmit() {
    if (!this.title || !this.date || !this.description) {
      return;
    }

    const task: Task = {
      id: Date.now(),
      userId: this.userId(),
      title: this.title,
      date: this.date,
      description: this.description,
      completed: false,
    };

    this.taskCreated.emit(task);

    this.title = '';
    this.date = '';
    this.description = '';
  }
}