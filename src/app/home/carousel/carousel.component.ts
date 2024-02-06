import { Component, Input, OnInit, input } from '@angular/core';
import { Articles } from '../../libs/request.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements OnInit{
  @Input() carouselArticles: Articles[] | undefined; 

  ngOnInit(): void {
      
  }
}
