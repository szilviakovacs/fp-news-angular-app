import { Component, OnInit } from '@angular/core';
import { NewsAppService } from '../news-app.service';
import { News } from '../news';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss',
  standalone: true,
  imports: [
    NgFor,
    FormsModule,
    NgIf
  ],

})
export class NewsComponent  implements OnInit  {
  
  news_list: News[] = [];
  news_title = "Foxpost news";
  hero = 'Rólad szólnak a hírek';
  zero = 'veled van tele a sajtó';
  news_default: News = {
    id: 1,
    title: 'Rólad szólnak a hírek',
    description: "veled van tele a sajtó",
    content: "veled van tele a sajtó",
    author: "The author",
    created_at: Date.now().toString(),
    updated_at: Date.now().toString()
  };
  
  constructor(private newsAppService: NewsAppService) {}
  ngOnInit(): void {
    this.newsAppService.getNews().subscribe(news => this.news_list = news);
  }

  selectedNews?: News;
  onSelect(news: News): void {
    this.selectedNews = news;
  }
}