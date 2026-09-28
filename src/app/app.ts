import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { User } from './user/user';

@Component({
  imports: [Header, User],
  selector: 'app-root',
  styleUrl: './layout/layout.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Explorer-Essential');
}