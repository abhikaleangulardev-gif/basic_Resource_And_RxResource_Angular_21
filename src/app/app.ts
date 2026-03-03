import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BasicResource } from "./component/basic-resource/basic-resource";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, BasicResource],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('basic_Resource_And_RxResource');
}
