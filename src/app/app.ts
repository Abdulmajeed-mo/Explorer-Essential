import { Component, signal } from '@angular/core';
import { Header } from './header/header';
@Component({
  imports: [ Header],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Explorer-Essential');
}
