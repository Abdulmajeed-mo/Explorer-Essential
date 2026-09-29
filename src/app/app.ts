import { Component } from '@angular/core';
import { Header } from './header/header';
import { User } from './user/user';
import { dummyUsers } from './dummy-users';

@Component({
  imports: [Header, User],
  selector: 'app-root',
  styleUrl: './layout/layout.css',
  templateUrl: './app.html',
})
export class App {
  users = dummyUsers;
}