import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { User } from './user/user';
import { dummyUsers } from './dummy-users';
import { Task } from './task/task';
import { AddTask } from './add-task/add-task';
@Component({
  imports: [Header, User , Task, AddTask],
  selector: 'app-root',
  styleUrl: './layout/layout.css',
  templateUrl: './app.html',
})




//logic for the app component
export class App {

  users = dummyUsers;

  selectedUserId: number = this.users[0].id;

  showAddTask = signal(false);

  get selectedUser() {
    return this.users.find(user => user.id === this.selectedUserId)!;
  }

  onselectUser(Id: number) {
    this.selectedUserId = Id;
  }

}