import { Component, OnInit } from '@angular/core';
import { RequestService, Articles } from '../../libs/request.service';
import { ActivatedRoute, Params } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent implements OnInit {
  content?: string | null; 
  article: Articles | undefined;
  latestArticles: Articles[] | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private requestService:RequestService,
    private sanitizer: DomSanitizer
  ){}

  ngOnInit(): void {
      this.getArticleData(this.activatedRoute.snapshot.params);

      this.activatedRoute.params.subscribe({
        next: (params: Params) => {
          this.getArticleData(this.activatedRoute.snapshot.params);
        }
      })
      this.requestService.getArticles({
        _sort:'id', _limit:5
      }).subscribe({
        next: articles => {
          this.latestArticles = articles
        }
      })
  }

  getArticleData(params: any) {
    console.log('params:', params);
    this.requestService.getArticle(params).subscribe({
      next: article => {
        console.log(article);
        this.article = article; 
        this.content = this.sanitizer.sanitize(1, article.content);
      }
    })
  }



}
