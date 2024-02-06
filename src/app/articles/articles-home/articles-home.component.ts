import { Component, OnInit } from '@angular/core';
import { RequestService, Articles } from '../../libs/request.service';


@Component({
  selector: 'app-articles-home',
  templateUrl: './articles-home.component.html',
  styleUrl: './articles-home.component.css'
})
export class ArticlesHomeComponent implements OnInit{

  articles: Articles[] = []; 
  start = 0; 

  constructor(
    private requestService: RequestService
  ){}

  ngOnInit(): void {
    this.getArticles()
  }

  getArticles() {
    this.requestService.getArticles({
      _sort:'id', _start:this.start, _limit:6
    }).pipe().subscribe({
      next: data => {
        console.log('data from articles-home', data)
        this.articles = [
          ...this.articles, 
          ...data
        ];
        this.start += 6;
      }
    })    
  }

  onScroll() {

    this.getArticles();
  }

}
