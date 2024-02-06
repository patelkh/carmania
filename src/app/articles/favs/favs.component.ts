import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FavService } from '../../libs/favs.service';


@Component({
  selector: 'app-favs',
  templateUrl: './favs.component.html',
  styleUrl: './favs.component.css'
})
export class FavsComponent implements OnInit, OnChanges {
  active = true;
  @Input('postId') postId? : number; 

  constructor(
    private favService: FavService
  ){}

  ngOnInit(): void {
      
  }

  ngOnChanges(changes: SimpleChanges): void {
      this.active = this.favService.checkFavState(this.postId!);
      this.toggleFav();
  }

  toggleFav() {
    this.active = this.favService.onToggleFav(this.postId!);
  }
}
