import { Component, OnInit } from '@angular/core';
import { RequestService, Articles } from '../libs/request.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  carouselArticles : Articles[] | undefined;
  homeArticles: Articles[] | undefined;
  constructor(
    private requestService:RequestService
  ){}


  ngOnInit(): void {
    // GET SLIDER ARTICLES
    this.requestService.getArticles({
      _sort:'id', _start:0, _end:5
    }).subscribe( data => { 
      this.carouselArticles = data;
    });
    
    // GET ARTICLES HOME
    this.requestService.getArticles({
      _sort:'id', _start:10, _end:16
    }).subscribe( data => { 
      this.homeArticles = data;
    });
  }
}
