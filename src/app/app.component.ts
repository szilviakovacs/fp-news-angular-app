import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { News } from './news';
import { NewsComponent } from './news/news.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'App news';
}