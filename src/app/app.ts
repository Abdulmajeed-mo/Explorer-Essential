import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { User } from './user/user';
import { dummyUsers } from './dummy-users';
import { dummyTasks } from './dummy-tasks';
import { Task } from './task/task';
import { AddTask } from './add-task/add-task';
import { Task as TaskModel } from './task.model';
@Component({
  imports: [Header, User , Task, AddTask],
  selector: 'app-root',
  styleUrl: './layout/layout.css',
  templateUrl: './app.html',
})




//logic for the app component
export class App {

  users = dummyUsers;

tasks: TaskModel[] = [...dummyTasks];  

get selectedUserTasks() {
  return this.tasks.filter(task => task.userId === this.selectedUserId);
}

  selectedUserId: number = this.users[0].id;

  showAddTask = signal(false);

  get selectedUser() {
    return this.users.find(user => user.id === this.selectedUserId)!;
  }

  onselectUser(Id: number) {
    this.selectedUserId = Id;
  }

onTaskCreated(task: TaskModel) {
  this.tasks.push(task);
  this.showAddTask.set(false);

  this.toastMessage.set('تمت إضافة المهمة بنجاح');

  setTimeout(() => {
    this.toastMessage.set('');
  }, 3000);
}
onCompleteTask(taskId: number) {
  const task = this.tasks.find(task => task.id === taskId);

  if (task) {
    task.completed = true;
  }
}

onDeleteTask(taskId: number) {
  this.tasks = this.tasks.filter(task => task.id !== taskId);
}
toastMessage = signal('');

}